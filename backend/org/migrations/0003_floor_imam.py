# Generated by Django 4.2.2 on 2023-06-27 00:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('org', '0002_alter_office_options_office_address_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='floor',
            name='imam',
            field=models.CharField(max_length=125, null=True),
        ),
    ]
