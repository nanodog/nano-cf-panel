from django.http import HttpResponse,JsonResponse
from django.template import Template, Context
from django.core import signing
import simplejson as json
import urllib
import requests
from urllib import request, parse
from django.shortcuts import render,redirect
from mysite.views import *
import CloudFlare
from mysite.settings import host_key

########## global value
record_error1 = HttpResponse(json.dumps([{'status':'error','message':'api call failed,please try again.'}]))
record_error2 = HttpResponse(json.dumps([{'status': 'error', 'message': 'something wrong,please try again'}]))
record_error3 = HttpResponse(json.dumps([{'status': 'not_login', 'message': 'none'}]))
record_error4 = HttpResponse(json.dumps([{'status': 'error', 'message': 'DNS Validation Error,you should set NS as CloudFlare NS'}]))

##########

# Create require view.
def user_cf_auth(request):
    if not request.session.get('is_login', False):
        return False
    return True

def domain_get_first(request):
    try:
        if not user_cf_auth(request):
            return redirect('/')
        print(request.session['language'])
        cf = CloudFlare.CloudFlare(request.session['user_mail'], request.session['user_api_key'])
        zones = cf.zones.get()
        if len(zones):
            request.session['account_id'] = zones[0]['account']['id']
        else:
            zones=0
        return render(request, 'forms.html', {"zones": zones,"user_name":request.session['user_mail'],"lang":request.session['language']})
    except CloudFlare.exceptions.CloudFlareAPIError as e:
        return HttpResponse('/zones.get %d %s - api call failed, Please try it in a while' % (e, e))
    except Exception as e:
        return HttpResponse('/zones.get - %s - api call failed, Please try it in a while' % (e))
def domain_records_list(request):
    try:
          if not request.session.get('is_login', False):
            return record_error3
          cf = CloudFlare.CloudFlare(request.session['user_mail'], request.session['user_api_key'])
          data_id=request.GET.get('data_id')
          dns_records = cf.zones.dns_records.get(data_id)
          if len(dns_records):
              zone_name = dns_records[0]['zone_name']
              record_list = []
              record_list.append({'status': 'success', 'zone_name': zone_name})
              for dns_record in dns_records:
                  record_data = {}
                  record_data['record_id'] = dns_record['id']
                  record_data['name'] = dns_record['name']
                  record_data['type'] = dns_record['type']
                  record_data['value'] = dns_record['content']
                  record_data['ttl'] = dns_record['ttl']
                  record_data['time'] = dns_record['modified_on']
                  record_data['proxied'] = dns_record['proxied']
                  record_list.append(record_data)
              record_lists = json.dumps(record_list)
              return HttpResponse(record_lists)
          else:
              record_list = []
              record_list.append({'status': 'no_records', 'zone_name': 'none'})
              record_lists = json.dumps(record_list)
              return HttpResponse(record_lists)
    except CloudFlare.exceptions.CloudFlareAPIError as e:
          return record_error1
    except Exception as e:
          return record_error2

def record_set(request):
    try:
        if not request.session.get('is_login', False):
             return record_error3
        cf = CloudFlare.CloudFlare(request.session['user_mail'], request.session['user_api_key'])
        zone_id=request.POST.get('zone_id')
        dns_record_id=request.POST.get('dns_record_id')
        record_list = []
        if request.POST.get('action')=="proxied":
            if request.POST.get('proxied') == "true":
                domain_info = {'name': request.POST.get('name'), 'type': request.POST.get('type'),
                               'content': request.POST.get('content'), 'ttl': eval(request.POST.get('ttl')),
                               'proxied': True}
            else:
                domain_info = {'name': request.POST.get('name'), 'type': request.POST.get('type'),
                               'content': request.POST.get('content'), 'ttl': eval(request.POST.get('ttl')),
                               'proxied': False}
            cf_data=cf.zones.dns_records.put(zone_id, dns_record_id, data=domain_info)
            print(domain_info)
            if cf_data['id']==request.POST.get('dns_record_id'):
               record_list.append({'status': 'success', 'message':'none'})
            else:
               record_list.append({'status': 'false', 'message': 'please try it a while!'})
            return HttpResponse(json.dumps(record_list))
        elif(request.POST.get("action")=="add_record"):
            zone_id=request.POST.get('zone_id')
            if request.POST.get('proxied') == "true":
                domain_info = {'name': request.POST.get('name'),
                               'type': request.POST.get('type'),
                               'content': request.POST.get('content'),
                               'ttl': eval(request.POST.get('ttl')),
                               'proxied': True}
            else:
                domain_info = {'name': request.POST.get('name'), 'type': request.POST.get('type'),
                               'content': request.POST.get('content'), 'ttl': eval(request.POST.get('ttl')),
                               'proxied': False}
                record_list = []
                print(domain_info)
                cf_data =cf.zones.dns_records.post(request.POST.get('zone_id'), data=domain_info)
                if cf_data['name'] == request.POST.get('name'):
                    record_list.append({'status': 'success', 'message': 'none'})
                else:
                    record_list.append({'status': 'false', 'message': 'please try it a while!'})
            return HttpResponse(json.dumps(record_list))
        elif(request.POST.get("action")=="record_delete"):
            cf_data = cf.zones.dns_records.delete(request.POST.get('zone_id'),request.POST.get('dns_record_id'))
            if cf_data['id'] == request.POST.get('dns_record_id'):
                record_list.append({'status': 'success', 'message': 'none'})
            else:
                record_list.append({'status': 'false', 'message': 'please try it a while!'})
            return HttpResponse(json.dumps(record_list))
        elif (request.POST.get("action") == "update_record"):
            if request.POST.get('proxied') == "true":
                domain_info = {'name': request.POST.get('name'),
                               'type': request.POST.get('type'),
                               'content': request.POST.get('content'),
                               'ttl': eval(request.POST.get('ttl')),
                               'proxied': True}
            else:
                domain_info = {'name': request.POST.get('name'), 'type': request.POST.get('type'),
                               'content': request.POST.get('content'), 'ttl': eval(request.POST.get('ttl')),
                               'proxied': False}
            cf_data = cf.zones.dns_records.put(request.POST.get('zone_id'),request.POST.get('dns_record_id'),data=domain_info)
            if cf_data['id']==request.POST.get('dns_record_id'):
                    record_list.append({'status': 'success', 'message': 'none'})
            else:
                    record_list.append({'status': 'false', 'message': 'please try it a while!'})
            return HttpResponse(json.dumps(record_list))
    except CloudFlare.exceptions.CloudFlareAPIError as e:
          return record_error1
    except Exception as e:
          return record_error2

def cname_detail(request):
    try:
        if not user_cf_auth(request):
            return record_error3
        data = {'act': 'zone_lookup', 'host_key': host_key,'user_key': request.session['user_key'], 'zone_name': request.GET.get('name')}
        cf_data_reg = urllib.request.urlopen('https://api.cloudflare.com/host-gw.html',urllib.parse.urlencode(data).encode('utf-8'))
        cf_data_reg = json.loads(cf_data_reg.read().decode("UTF-8"))
        record_list = []
        if (cf_data_reg['result'] == 'success'):
            cname_detail=cf_data_reg['response']
            record_list.append({'status': 'success', 'message': 'none'})
            record_list.append(cname_detail)
            return HttpResponse(json.dumps(record_list))
        else:
            record_error_cname=HttpResponse(json.dumps([{'status': 'error', 'message': cf_data_reg['msg']}]))
            return record_error_cname
    except CloudFlare.exceptions.CloudFlareAPIError as e:
          return record_error4
    except Exception as e:
          return record_error2

def add_z_c_r(request):
    try:
        record_list = []
        if not user_cf_auth(request):
            return record_error3
        if(request.POST.get("action")=="add_zone"):
           data = {'act': 'full_zone_set', 'host_key': host_key,'user_key': request.session['user_key'], 'zone_name': request.POST.get('zone_name')}
           cf_data_reg = urllib.request.urlopen('https://api.cloudflare.com/host-gw.html',urllib.parse.urlencode(data).encode('utf-8'))
           cf_data_reg = json.loads(cf_data_reg.read().decode("UTF-8"))

           if (cf_data_reg['result'] == 'success'):
              add_zone_detail=cf_data_reg['response']
              record_list.append({'status': 'success', 'zone':add_zone_detail['zone_name'],'message': add_zone_detail['msg']})
              return HttpResponse(json.dumps(record_list))
           else:
              record_error_add_zone=HttpResponse(json.dumps([{'status': 'error', 'message': cf_data_reg['msg']}]))
              return record_error_add_zone
        elif (request.POST.get("action")=="zone_delete"):
            data = {'act': 'zone_delete', 'host_key': host_key,
                    'user_key': request.session['user_key'], 'zone_name': request.POST.get('zone_name')}
            cf_data_reg = urllib.request.urlopen('https://api.cloudflare.com/host-gw.html',urllib.parse.urlencode(data).encode('utf-8'))
            cf_data_reg = json.loads(cf_data_reg.read().decode("UTF-8"))
            if (cf_data_reg['result'] == 'success'):
                delete_zone_detail = cf_data_reg['response']
                record_list.append({'status': 'success', 'zone': delete_zone_detail['zone_name'], 'message': cf_data_reg['msg']})
                return HttpResponse(json.dumps(record_list))
            else:
                record_error_delete_zone= HttpResponse(json.dumps([{'status': 'error', 'message': cf_data_reg['msg']}]))
                return record_error_delete_zone
        else:
            return record_error2
    except CloudFlare.exceptions.CloudFlareAPIError as e:
          return record_error4
    except Exception as e:
          return record_error2
def add_cname(request):
    try:
       if not request.session.get('is_login', False):
           return record_error3
       record_list = []
       data1 = {'act': 'zone_set', 'host_key': host_key,
                'user_key': request.session['user_key'], 'zone_name': request.POST.get('zone_name'),
                'resolve_to': 'github.ci', 'subdomains': request.POST.get("subdomains")}
       data2={'act': 'zone_lookup','host_key': host_key,'user_key': request.session['user_key'], 'zone_name': request.POST.get('zone_name'),}
       cf_data_reg2 = urllib.request.urlopen('https://api.cloudflare.com/host-gw.html',urllib.parse.urlencode(data2).encode('utf-8'))
       cf_data_reg2 = json.loads(cf_data_reg2.read().decode("UTF-8"))
       if (cf_data_reg2['result'] == 'success'):
           lookup_detail=cf_data_reg2['response']
           if(lookup_detail['forward_tos']==None):
               cf_data_reg1 = urllib.request.urlopen('https://api.cloudflare.com/host-gw.html',
                                                    urllib.parse.urlencode(data1).encode('utf-8'))
               cf_data_reg1 = json.loads(cf_data_reg1.read().decode("UTF-8"))
               if (cf_data_reg1['result'] == 'success'):
                   cname_detail = cf_data_reg2['response']
                   record_list.append({'status': 'success', 'message': cname_detail['forward_tos']})
                   return HttpResponse(json.dumps(record_list))
               else:
                   cname_error_zone = HttpResponse(json.dumps([{'status': 'error', 'message': cf_data_reg1['msg']}]))
                   return cname_error_zone
           else:
               sub=""
               hosted_cnames=lookup_detail['hosted_cnames']
               for k,v in hosted_cnames.items():
                   sub+=k+":"+v+","
               sub+=request.POST.get('subdomains')
               data3 = {'act': 'zone_set', 'host_key': host_key,
                        'user_key': request.session['user_key'], 'zone_name': request.POST.get('zone_name'),
                        'resolve_to': 'github.ci', 'subdomains': sub}
               cf_data_reg3 = urllib.request.urlopen('https://api.cloudflare.com/host-gw.html',urllib.parse.urlencode(data3).encode('utf-8'))
               cf_data_reg3 = json.loads(cf_data_reg3.read().decode("UTF-8"))
               if (cf_data_reg3['result'] == 'success'):
                   sub=""
                   b = cf_data_reg3['response']
                   cname_detail=b['hosted_cnames']
                   for k,v in cname_detail.items():
                       sub+= k + "-->" + v + ",\r\n"
                   record_list.append({'status': 'success', 'message': sub})
                   return HttpResponse(json.dumps(record_list))
               else:
                   cname_error_zone = HttpResponse(json.dumps([{'status': 'error', 'message': cf_data_reg3['msg']}]))
                   return cname_error_zone
       else:
           cname_error_zone = HttpResponse(json.dumps([{'status': 'error', 'message': cf_data_reg2['msg']}]))
           return cname_error_zone

    except CloudFlare.exceptions.CloudFlareAPIError as e:
          return record_error4


def purge_cache(request):
    try:
        cf = CloudFlare.CloudFlare(request.session['user_mail'], request.session['user_api_key'])
        data_id = request.POST.get('zone_id')
        if  request.POST.get('action')=='purge_all':
            way={"purge_everything":True}
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.purge_cache.post(data_id,data=way)
            if result['id'] == data_id:
                record_list = []
                record_list.append({'status': 'success'})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list = []
                record_list.append({'status': 'fail'})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.POST.get('action')=='purge_url':
            if not request.session.get('is_login', False):
                return record_error3
            urls=request.POST.get('purge_urls')
            urls=urls.split(",")
            result = cf.zones.purge_cache.post(data_id,data=urls)
            print(result)
            if result['id'] == data_id:
                record_list = []
                record_list.append({'status': 'success'})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list = []
                record_list.append({'status': 'fail'})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)

    except CloudFlare.exceptions.CloudFlareAPIError as e:
          return record_error1
    except Exception as e:
          return record_error2

def cache(request):
    try:
        record_list = []
        cf = CloudFlare.CloudFlare(request.session['user_mail'], request.session['user_api_key'])
        data_id = request.GET.get('zone_id')
        if  request.GET.get('action')=='cache_level':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.cache_level.get(data_id)
            if result['id'] == 'cache_level':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='agg':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.cache_level.patch(data_id,data={'value':request.GET.get('value')})
            if result['id'] == 'cache_level':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='sim':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.cache_level.patch(data_id,data={'value':request.GET.get('value')})
            if result['id'] == 'cache_level':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='bas':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.cache_level.patch(data_id,data={'value':request.GET.get('value')})
            if result['id'] == 'cache_level':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'get_ttl':
            data=cf.zones.settings.browser_cache_ttl.get(data_id)
            if data['id']=='browser_cache_ttl':
                record_list.append({'status': 'success','value':data['value'],'time':data['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':data['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'set_ttl':
            result=cf.zones.settings.browser_cache_ttl.patch(data_id,data={'value':json.loads(request.GET.get('value'))})
            if result['id']=='browser_cache_ttl':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'get_always_online':
            result=cf.zones.settings.always_online.get(data_id)
            if result['id']=='always_online':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'always_online':
            result=cf.zones.settings.always_online.patch(data_id,data={'value':request.GET.get('value')})
            if result['id']=='always_online':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'get_dm':
            result=cf.zones.settings.development_mode.get(data_id)
            if result['id']=='development_mode':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'set_dm':
            result=cf.zones.settings.development_mode.patch(data_id,data={'value':request.GET.get('value')})
            if result['id']=='development_mode':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
    except CloudFlare.exceptions.CloudFlareAPIError as e:
          return record_error1
    except Exception as e:
          return record_error2

def ssl(request):
    try:
        record_list = []
        cf = CloudFlare.CloudFlare(request.session['user_mail'], request.session['user_api_key'])
        data_id = request.GET.get('zone_id')
        if  request.GET.get('action')=='get_ssl':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.ssl.get(data_id)
            if result['id'] == 'ssl':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='off':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.ssl.patch(data_id,data={'value':request.GET.get('value')})
            if result['id'] == 'ssl':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='full':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.ssl.patch(data_id,data={'value':request.GET.get('value')})
            if result['id'] == 'ssl':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='strict':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.ssl.patch(data_id,data={'value':request.GET.get('value')})
            if result['id'] == 'ssl':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='flex':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.ssl.patch(data_id,data={'value':request.GET.get('value')})
            if result['id'] == 'ssl':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='get_always_https':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.always_use_https.get(data_id)
            if result['id'] == 'always_use_https':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'always_use_https':
            result=cf.zones.settings.always_use_https.patch(data_id,data={'value':request.GET.get('value')})
            if result['id']=='always_use_https':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='security_header':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.security_header.get(data_id)
            if result['id'] == 'security_header':
                record_list.append({'status': 'success','value':result['value']['strict_transport_security'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='set_security_header':
            if not request.session.get('is_login', False):
                return record_error3
            data={ "value":{"strict_transport_security":{"enabled":json.loads(request.GET.get("enabled")),"max_age":json.loads(request.GET.get("max_age")),"include_subdomains":json.loads(request.GET.get("include_subdomains")),"nosniff":json.loads(request.GET.get("nosniff"))}}}
            print(data)
            result = cf.zones.settings.security_header.patch(data_id,data=data)
            if result['id'] == 'security_header':
                record_list.append({'status': 'success','value':result['value']['strict_transport_security'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='get_oe':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.opportunistic_encryption.get(data_id)
            if result['id'] == 'opportunistic_encryption':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'set_oe':
            result=cf.zones.settings.opportunistic_encryption.patch(data_id,data={'value':request.GET.get('value')})
            if result['id']=='opportunistic_encryption':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='get_aht':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.automatic_https_rewrites.get(data_id)
            if result['id'] == 'automatic_https_rewrites':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'set_aht':
            result=cf.zones.settings.automatic_https_rewrites.patch(data_id,data={'value':request.GET.get('value')})
            if result['id']=='automatic_https_rewrites':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action')=='get_aop':
            if not request.session.get('is_login', False):
                return record_error3
            result = cf.zones.settings.tls_client_auth.get(data_id)
            if result['id'] == 'tls_client_auth':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'set_aop':
            result=cf.zones.settings.tls_client_auth.patch(data_id,data={'value':request.GET.get('value')})
            if result['id']=='tls_client_auth':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'get_attack_mode':
            result=cf.zones.settings.security_level.get(data_id)
            if result['id']=='security_level':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
        elif request.GET.get('action') == 'set_attack_mode':
            result=cf.zones.settings.security_level.patch(data_id,data={'value':request.GET.get('value')})
            if result['id']=='security_level':
                record_list.append({'status': 'success','value':result['value'],'time':result['modified_on']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
            else:
                record_list.append({'status': 'fail','message':result['message']})
                record_lists = json.dumps(record_list)
                return HttpResponse(record_lists)
    except CloudFlare.exceptions.CloudFlareAPIError as e:
          return record_error1
    except Exception as e:
          return record_error2

# function for dashboard
def dashboard(request):
    try:
        record_list=[]
        headers = {"X-Auth-Email": request.session['user_mail'], "X-Auth-Key": request.session['user_api_key']}
        url = 'https://api.cloudflare.com/client/v4/zones/' + request.GET.get('zone_id') + '/analytics/dashboard?since=' + request.GET.get('since')+ '&continuous=false'
        data = requests.get(url, headers=headers)
        result = json.loads(data.text)
        if result['success']:
            record_list.append({'status': 'success', 'result': result['result']})
            record_lists = json.dumps(record_list)
            return HttpResponse(record_lists)
        else:
            record_list.append({'status': 'fail', 'message': result['message']})
            record_lists = json.dumps(record_list)
            return HttpResponse(record_lists)
    except Exception as e:
          return record_error2