# Generated by Django 4.2.2 on 2023-06-27 00:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('org', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Congregation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prayer', models.CharField(choices=[('FAJR', 'Fajr'), ('ZUHR', 'Zuhr'), ('ASR', 'Asr'), ('MAGHRIB', 'Maghrib'), ('ISHA', 'Isha'), ('JUMAAH', 'Jumaah')], max_length=10)),
                ('floor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='org.floor')),
                ('office', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='org.office')),
            ],
        ),
    ]
