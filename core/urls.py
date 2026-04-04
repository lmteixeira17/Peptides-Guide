from django.urls import path
from . import views

urlpatterns = [
    path('', views.index_view, name='index'),
    path('health/', views.health_view, name='health'),
    path('robots.txt', views.robots_txt, name='robots_txt'),
    path('sitemap.xml', views.sitemap_xml, name='sitemap_xml'),
    path('llms.txt', views.llms_txt, name='llms_txt'),
]
