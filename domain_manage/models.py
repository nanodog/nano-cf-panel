from django.db import models

# Create your models here.

class Session_Mail(models.Model):
    mail=models.CharField(max_length=32)
    switch=models.CharField(max_length=10)
    domain=models.TextField()
    class Meta:
        db_table='Session_Mail'


class Mail_Records(models.Model):
    mail=models.CharField(max_length=32)
    domain=models.TextField()
    probed=models.TextField()
    d_type=models.CharField(max_length=10)
    change_to=models.TextField()
    state=models.TextField()
    frequency=models.IntegerField()
    class Meta:
        db_table='Mail_Records'

