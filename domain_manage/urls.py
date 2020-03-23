"""domain_manage URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import *
from django.contrib import admin
from domain_manage.views import *
from django.contrib import admin

app_name='manage'

urlpatterns = [
    url(r'^b',domain_get_first),
    url(r'^add_cname',add_cname),
    url(r'^dns_records',domain_records_list),
    url(r'^proxied_set',record_set),
    url(r'^update_record',record_set),
    url(r'^new_record',record_set),
    url(r'^delete_record',record_set),
    url(r'^cname_detail',cname_detail),
    url(r'^add',add_z_c_r),
    url(r'^zone_delete',add_z_c_r),
    url(r'^purge_cache',purge_cache),
    url(r'^cache',cache),
    url(r'^ssl',ssl),
    url(r'^analytics',dashboard),
 ]
