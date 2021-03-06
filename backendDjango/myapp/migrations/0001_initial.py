# Generated by Django 3.1.14 on 2022-01-18 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Boutique',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('address', models.CharField(max_length=250)),
                ('city', models.CharField(default='Paris', max_length=64)),
                ('Zip_code', models.CharField(default='75001', max_length=5)),
                ('phone', models.CharField(max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='Ngo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('address', models.CharField(max_length=250)),
                ('city', models.CharField(default='Paris', max_length=64)),
                ('Zip_code', models.CharField(default='75001', max_length=5)),
                ('phone', models.CharField(max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('address', models.CharField(max_length=250)),
                ('city', models.CharField(default='Paris', max_length=64)),
                ('Zip_code', models.CharField(default='75001', max_length=5)),
                ('phone', models.CharField(max_length=15)),
            ],
        ),
    ]
