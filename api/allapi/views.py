from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def data(self):
    return JsonResponse({'foo':'bar'})