# Generated by Django 5.0.2 on 2024-03-03 17:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ccrcoeweb', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='gallery',
        ),
    ]
