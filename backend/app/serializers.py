from rest_framework import serializers
from .models import App, CustomerData, InventoryData

class AppSerializer(serializers.ModelSerializer):
    class Meta:
        model = App
        fields = ('id', 'title', 'description', 'completed')

class CustomerDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerData
        fields = ('id', 'name', 'email', 'case', 'layout', 'requireSwitchMod', 'lube', 'film', 'notes')

class InventoryDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryData
        fields = ('id', 'name', 'itemType', 'price', 'description', 'thumbnail', 'fullImage')