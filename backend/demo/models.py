from django.conf import settings
from django.db import models
class DemoFields(models.Model):
    'Generated Model'
    quan_is_the_best = models.TextField()
    witch_hunt = models.BigIntegerField(null=True,blank=True,)

# Create your models here.
