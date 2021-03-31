from django.contrib import admin
from .models import App, CustomerData, InventoryData

# Register your models here.

class AppAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

class CustomerDataAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'case', 'layout', 'requireSwitchMod', 'lube', 'film', 'notes')

class InventoryDataAdmin(admin.ModelAdmin):
    list_display = ('name', 'itemType', 'price', 'description', 'thumbnail', 'fullImage')

admin.site.register(App, AppAdmin)
admin.site.register(CustomerData, CustomerDataAdmin)
admin.site.register(InventoryData, InventoryDataAdmin)

