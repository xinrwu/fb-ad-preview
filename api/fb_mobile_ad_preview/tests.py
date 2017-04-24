# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase
from fb_mobile_ad_preview.models import PreviewInfo
from rest_framework import status
from rest_framework.test import APITestCase

class PreviewInfoTests(APITestCase):
    def test_create_preview(self):
        """ Test we can create a new preview. """
        data = {'business_name': 'Bell',
                'text': 'Looking for a new internet provider?',
                'image': '001.jpg',
                'description': 'Fastest internet provider!',
                'url': 'https://www.bell.ca',
                'call_to_action': 'try here!'}
        response = self.client.post('/previews/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(PreviewInfo.objects.count(), 1)
        self.assertEqual(PreviewInfo.objects.get().business_name, 'Bell')

    def test_bad_input(self):
        """ Test does not create preview if input is bad. """
        data = {'business_name': 'Bell',
                'text': 'Looking for a new internet provider?',
                'image': '001.jpg',
                'description': 'Fastest internet provider!',
                'url': 'https://www.bell.ca',
                'call_to_action': 'try hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!'}
        response = self.client.post('/previews/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(PreviewInfo.objects.count(), 0)

    def test_empty(self):
        """ Test allow empty field. """
        data = {'business_name': 'Bell',
                'text': 'Looking for a new internet provider?',
                'image': '001.jpg',
                'description': 'Fastest internet provider!',
                'url': 'https://www.bell.ca',
                'call_to_action': ''}
        response = self.client.post('/previews/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(PreviewInfo.objects.count(), 1)
        self.assertEqual(PreviewInfo.objects.get().business_name, 'Bell')

    def test_get_previews(self):
        """ Test all previews get returned from GET call. """
        data1 = {'business_name': 'Bell',
                 'text': 'Looking for a new internet provider?',
                 'image': '001.jpg',
                 'description': 'Fastest internet provider!',
                 'url': 'https://www.bell.ca',
                 'call_to_action': 'try here!'}
        self.client.post('/previews/', data1, format='json')
        data2 = {'business_name': 'Bell2',
                 'text': 'Looking for a new internet provider?',
                 'image': '001.jpg',
                 'description': 'Fastest internet provider!',
                 'url': 'https://www.bell.ca',
                 'call_to_action': 'try here!'}
        self.client.post('/previews/', data2, format='json')
        response = self.client.get('/previews/')
        self.assertEqual([data1, data2], response.data)
