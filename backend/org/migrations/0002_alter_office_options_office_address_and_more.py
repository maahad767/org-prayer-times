# Generated by Django 4.2.2 on 2023-06-27 00:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('org', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='office',
            options={'ordering': ('name',)},
        ),
        migrations.AddField(
            model_name='office',
            name='address',
            field=models.CharField(max_length=256, null=True),
        ),
        migrations.AlterUniqueTogether(
            name='floor',
            unique_together={('office', 'number')},
        ),
        migrations.AlterUniqueTogether(
            name='office',
            unique_together={('name',)},
        ),
    ]
