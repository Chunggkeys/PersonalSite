# Generated by Django 3.1.3 on 2020-12-03 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_inventorydata'),
    ]

    operations = [
        migrations.AddField(
            model_name='inventorydata',
            name='fullImage',
            field=models.CharField(default='', max_length=120),
        ),
    ]
