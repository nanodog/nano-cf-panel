from django.db import models

# Create your models here.

class SessionT(models.Model):
    sessionid=models.CharField(primary_key=True,max_length=64)

    class Meta:
        db_table='sessiontable'


class Domain_id(models.Model):
    mail=models.CharField(max_length=32)
    name = models.CharField(max_length=32)
    zone_id=models.TextField()
    sessionid=models.ForeignKey('sessionT', on_delete=models.CASCADE,)
    class Meta:
        db_table='domainlist'

