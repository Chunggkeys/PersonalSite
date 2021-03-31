from django.db import models

# Create your models here.

class App(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title

class CustomerData(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=120)
    case = models.CharField(max_length=120)
    layout = models.CharField(max_length=5)
    requireSwitchMod = models.BooleanField()
    lube = models.BooleanField()
    film = models.BooleanField()
    notes = models.CharField(max_length=500)

    def _str_(self):
        return self.name

# Change to dropdown instead of having open charField
class InventoryData(models.Model):
    name = models.CharField(max_length=120)
    itemType = models.CharField(max_length=120)
    price = models.FloatField()
    description = models.CharField(max_length=120)
    thumbnail = models.CharField(max_length=120)
    fullImage = models.CharField(max_length=120, default="")

    def _str_(self):
        return self.name