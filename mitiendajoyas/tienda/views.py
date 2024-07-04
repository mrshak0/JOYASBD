from django.shortcuts import render

# Create your views here.

def principal(request):
    context={}
    return render(request, 'tienda/principal.html', context)

def anillos(request):
    context={}
    return render(request, 'tienda/anillos.html', context)

def anillosplata(request):
    context={}
    return render(request, 'tienda/anillosplata.html', context)

def API(request):
    context={}
    return render(request, 'tienda/API.html', context)

def arosplata(request):
    context={}
    return render(request, 'tienda/arosplata.html', context)

def cadena(request):
    context={}
    return render(request, 'tienda/cadena.html', context)

def cadenaplata(request):
    context={}
    return render(request, 'tienda/cadenaplata.html', context)

def compra(request):
    context={}
    return render(request, 'tienda/compra.html', context)

def contacto(request):
    context={}
    return render(request, 'tienda/contacto.html', context)

def insesion(request):
    context={}
    return render(request, 'tienda/insesion.html', context)

def oroaros(request):
    context={}
    return render(request, 'tienda/oroaros.html', context)

def registro(request):
    context={}
    return render(request, 'tienda/registro.html', context)

def sobrenosotros(request):
    context={}
    return render(request, 'tienda/sobrenosotros.html', context)

def sucursales(request):
    context={}
    return render(request, 'tienda/sucursales.html', context)


































