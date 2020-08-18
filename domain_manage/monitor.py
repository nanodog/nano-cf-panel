import urllib.request
import urllib.parse
import requests
import CloudFlare
import re
from pytz import utc
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.jobstores.sqlalchemy import SQLAlchemyJobStore
from apscheduler.executors.pool import ProcessPoolExecutor
from domain_manage import models
from django.core.exceptions import ObjectDoesNotExist


jobstores = {
    'default': SQLAlchemyJobStore(url='sqlite:///jobs.sqlite')
}
executors = {
    'default': {'type': 'threadpool', 'max_workers': 20},
    'processpool': ProcessPoolExecutor(max_workers=5)
}
job_defaults = {
    'coalesce': False,
    'max_instances': 3
}
sch = BackgroundScheduler(jobstores=jobstores, executors=executors, job_defaults=job_defaults, timezone=utc)


def monitor_show(aim):
    result=[]
    nodes={'深圳联通':'5439460c-0115-421a-b8ad-449eb2b4c28a','重庆电信':'70a537ed-95b2-4bfd-b6b0-64c3920d9910','北京多线':'aaecff2c-c7fa-43be-b776-6c0432b7cc4e'}
    url = "http://tool.chinaz.com/iframe.ashx?t=ping"
    for node in nodes:
            form_data = {
                'guid': nodes[node],
                'host': aim,
                'ishost': '1',
                'encode': 'ECvBP9vjbuXRi0CVhnXAbufDNPDryYzO',
                'checktype': '1',
            }
            headers = {
                'Host': 'tool.chinaz.com',
                'Origin': 'http://tool.chinaz.com',
                'Referer': 'http://tool.chinaz.com/speedtest/'+aim,
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.108 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest'
            }
            r=urllib.request.urlopen(
                urllib.request.Request(
                    url=url,
                    data=urllib.parse.urlencode(form_data).encode('utf-8'),
                    headers=headers
                )
            ).read().decode("utf-8")
            if int(re.findall("state:(\d)",r)[0])== 0:
                result.append({'node':node,'http':'','ping':'timeout'})
            else:
                result.append({'node':node,'http':int(re.findall("httpstate:(\d+)",r)),'ping':int(re.findall("alltime:'(.*?)'",r)[0])})
    return result
def monitor_job(aim, user_mail,user_api,data_id,type,content):
            timeout=0
            nodes={'深圳联通':'5439460c-0115-421a-b8ad-449eb2b4c28a','重庆电信':'70a537ed-95b2-4bfd-b6b0-64c3920d9910','北京多线':'aaecff2c-c7fa-43be-b776-6c0432b7cc4e'}
            url = "http://tool.chinaz.com/iframe.ashx?t=ping"
            for node in nodes:
                form_data = {
                        'guid': nodes[node],
                        'host': aim,
                        'ishost': '1',
                        'encode': 'ECvBP9vjbuXRi0CVhnXAbufDNPDryYzO',
                        'checktype': '1',
                    }
                headers = {
                        'Host': 'tool.chinaz.com',
                        'Origin': 'http://tool.chinaz.com',
                        'Referer': 'http://tool.chinaz.com/speedtest/'+aim,
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.108 Safari/537.36',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                r=urllib.request.urlopen(
                        urllib.request.Request(
                            url=url,
                            data=urllib.parse.urlencode(form_data).encode('utf-8'),
                            headers=headers
                        )
                    ).read().decode("utf-8")
                if int(re.findall("state:(\d)",r)[0])==0 or int(re.findall("httpstate:(\d+)",r)[0])>307:
                    timeout+=1
            if timeout>=3:
                if requests.get("http://"+aim).status_code>307:
                     cf = CloudFlare.CloudFlare(user_mail, user_api)
                     dns_records = cf.zones.dns_records.get(data_id)
                     for dns_record in dns_records:
                         if dns_record['name']==aim:
                                domain_info = {'name': aim,
                                    'type': type,
                                    'content': content,
                                    'ttl': dns_record['ttl'],
                                    'proxied': False}
                                cf_data = cf.zones.dns_records.put(data_id,dns_record['id'],data=domain_info)
                                if cf_data['id']==dns_record['id']:
                                    job=sch.get_job(aim)
                                    models.Mail_Records.objects.filter(probed=aim).update(state="switched")
                                    job.pause()                                
#date={aim, user_mail,user_api,data_id,type,content}