from django.urls import path
from . import views

urlpatterns = [
    path('', views.index_view, name='index'),
    path('peptideos/<slug:slug>/', views.peptide_detail_view, name='peptide_detail'),
    path('combinacoes/<slug:slug>/', views.stack_detail_view, name='stack_detail'),
    path('categorias/<slug:slug>/', views.category_view, name='category'),
    path('glossario/', views.glossario_view, name='glossario'),
    path('sobre/', views.sobre_view, name='sobre'),
    path('api/peptides.json', views.peptides_api, name='peptides_api'),
    path('api/v1/peptides.json', views.peptides_api, name='peptides_api_v1'),
    path('health/', views.health_view, name='health'),
    path('robots.txt', views.robots_txt, name='robots_txt'),
    path('.well-known/security.txt', views.security_txt, name='security_txt'),
    path('security.txt', views.security_txt, name='security_txt_legacy'),
    path('sitemap.xml', views.sitemap_xml, name='sitemap_xml'),
    path('llms.txt', views.llms_txt, name='llms_txt'),
]
