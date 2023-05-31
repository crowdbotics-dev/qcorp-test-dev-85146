from django.conf import settings
from django.db import models
class Home(models.Model):
    'Generated Model'
    address = models.CharField(max_length=100,)
    city = models.CharField(max_length=100,)
    state = models.CharField(max_length=2,)
    zip = models.CharField(max_length=10,)
    created_at = models.DateTimeField(auto_now_add=True,)
    updated_at = models.DateTimeField(auto_now=True,)
    country = models.TextField(null=True,blank=True,)
class PartyTime(models.Model):
    'Generated Model'
    party_one = models.BigIntegerField()
class TT(models.Model):
    'Generated Model'
    tt = models.BigIntegerField()
