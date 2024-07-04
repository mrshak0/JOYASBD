from django.urls import path
from .import views
urlpatterns = [
    path('principal',views.principal, name='principal'),
    path('anillos',views.anillos, name='anillos'),
    path('anillosplata',views.anillosplata, name='anillosplata'),
    path('API',views.API, name='API'),
    path('arosplata',views.arosplata, name='arosplata'),
    path('cadena',views.cadena, name='cadena'),
    path('cadenaplata',views.cadenaplata, name='cadenaplata'),
    path('compra',views.compra, name='compra'),
    path('contacto',views.contacto, name='contacto'),
    path('insesion',views.insesion, name='insesion'),
    path('oroaros',views.oroaros, name='oroaros'),
    path('registro',views.registro, name='registro'),
    path('sobrenosotros',views.sobrenosotros, name='sobrenosotros'),
    path('sucursales',views.sucursales, name='sucursales'),


]