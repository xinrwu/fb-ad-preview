# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from fb_mobile_ad_preview.models import PreviewInfo
from fb_mobile_ad_preview.serializer import PreviewInfoSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def preview_list(request, format=None):
    """ List all saved preview info, or create a new preview. """
    if request.method == 'GET':
        previews = PreviewInfo.objects.all()
        serializer = PreviewInfoSerializer(previews, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PreviewInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
