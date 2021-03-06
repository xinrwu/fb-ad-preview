# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-23 03:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PreviewInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('business_name', models.CharField(max_length=80)),
                ('text', models.TextField()),
                ('image', models.CharField(max_length=10)),
                ('description', models.TextField()),
                ('url', models.CharField(max_length=100)),
                ('call_to_action', models.CharField(max_length=20)),
            ],
        ),
    ]
