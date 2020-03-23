from django.http import HttpResponse,HttpResponseRedirect
from django.template import Template, Context
import datetime
import urllib
from urllib import request, parse
from django.shortcuts import render,redirect
from domain_manage.views import *
import simplejson as json
from mysite.settings import host_key
def current_datetime(request):
    now = datetime.datetime.now()
    t = Template("<html><body>It is now {{ current_date }}.</body></html>")
    html = t.render(Context({'current_date': now}))
    return HttpResponse(html)


def display_meta(request): 
    values = request.META.items() 
    values = sorted(values, key=lambda x: x[0]) 
    return render(request,'display_meta.html', {'values': values})

def is_login(request):
    try:
        if not request.session.get('is_login', False):
            return render(request, 'index.html')
        #cookiess = request.COOKIES.get('sessionid')
        return redirect('manage/b')
        #return HttpResponse('success')
    except:
        return render(request, 'index.html')
def to_login(request):
     if(request.method == 'POST'):
        data={'act': 'user_auth',
              'host_key': host_key,
              'cloudflare_email': request.POST.get('usermail'),
              'cloudflare_pass': request.POST.get('userpass')}
        cf_data=urllib.request.urlopen('https://api.cloudflare.com/host-gw.html',urllib.parse.urlencode(data).encode('utf-8'))
        cf_data=json.loads(cf_data.read().decode("UTF-8"))
        if (cf_data['result']=='error'):
            cf_data_msg=cf_data['msg']
            err_info={"result":"error","msg":cf_data_msg}
            err_info=json.dumps(err_info)
            return HttpResponse(err_info)
        if (cf_data['result']=='success'):
            request.session['is_login']=True
            cf_data_response=cf_data['response']
            request.session['user_mail']=request.POST.get('usermail')
            request.session['language']=request.POST.get('language')
            request.session['user_key']=cf_data_response['user_key']
            request.session['user_api_key']=cf_data_response['user_api_key']
            succ_info = {"result": "success", "msg": 'none'}
            succ_info = json.dumps(succ_info)
            return HttpResponse(succ_info)
     return is_login(request)

def to_register(request):
    if(request.method == 'POST'):
        data_reg = {'act': 'user_create',
                'host_key': host_key,
                'cloudflare_email': request.POST.get('usermail'),
                'cloudflare_pass': request.POST.get('userpass')
                }
        cf_data_reg = urllib.request.urlopen('https://api.cloudflare.com/host-gw.html',urllib.parse.urlencode(data_reg).encode('utf-8'))
        cf_data_reg = json.loads(cf_data_reg.read().decode("UTF-8"))
        if (cf_data_reg['result'] == 'error'):
            cf_data_msg = cf_data_reg['msg']
            err_info={"result":"error","msg":cf_data_msg}
            err_info=json.dumps(err_info)
            return HttpResponse(err_info)
        if (cf_data_reg['result']=='success'):
            request.session['is_login']=True
            cf_data_response=cf_data_reg['response']
            request.session['user_mail']=request.POST.get('usermail')
            request.session['language'] = request.POST.get('language')
            request.session['user_key']=cf_data_response['user_key']
            request.session['user_api_key']=cf_data_response['user_api_key']
            succ_info = {"result": "success", "msg": 'none'}
            succ_info = json.dumps(succ_info)
            return HttpResponse(succ_info)
    return is_login(request)


def login(request):
    try:
      return to_login(request)
    except:
       return is_login(request)

def register(request):
    try:
      return to_register(request)
    except:
       return is_login(request)
def logout(request):
    request.session.flush()
    return redirect('/')
