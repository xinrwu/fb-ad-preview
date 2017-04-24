from django.conf.urls import url
from fb_mobile_ad_preview import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^previews/$', views.preview_list),
]

urlpatterns = format_suffix_patterns(urlpatterns)
