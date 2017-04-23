from rest_framework import serializers
from fb_mobile_ad_preview.models import PreviewInfo

class PreviewInfoSerializer(serializers.ModelSerializer):
    """ Serializer to represent PreviewInfo model """
    class Meta:
        model = PreviewInfo
        fields = ('business_name', 'text', 'image', 'description', 'url', 'call_to_action')
