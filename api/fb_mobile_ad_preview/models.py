# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class PreviewInfo(models.Model):
    """
    Preview information the user stores.
    """
    business_name = models.CharField(max_length=80)
    text = models.TextField()
    image = models.CharField(max_length=10)
    description = models.TextField()
    url = models.CharField(max_length=100)
    call_to_action = models.CharField(blank=True, max_length=20, null=True)
    message = models.TextField(null=True)
