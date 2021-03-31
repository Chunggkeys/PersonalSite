from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AppSerializer, CustomerDataSerializer, InventoryDataSerializer
from .models import App, CustomerData, InventoryData

# Create your views here.

class AppView(viewsets.ModelViewSet):
    serializer_class = AppSerializer
    queryset = App.objects.all()

class CustomerDataView(viewsets.ModelViewSet):
    serializer_class = CustomerDataSerializer
    queryset = CustomerData.objects.all()

class InventoryDataView(viewsets.ModelViewSet):
    serializer_class = InventoryDataSerializer
    queryset = InventoryData.objects.all()