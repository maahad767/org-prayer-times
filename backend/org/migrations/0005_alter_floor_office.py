# Generated by Django 4.2.2 on 2023-06-30 09:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('org', '0004_alter_floor_imam_alter_office_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='floor',
            name='office',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='floors', to='org.office'),
        ),
    ]
