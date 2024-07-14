# Generated by Django 5.0.6 on 2024-07-14 21:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0002_genero_trabajador'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contacto',
            fields=[
                ('id_genero', models.AutoField(db_column='idContacto', primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=50)),
                ('mensaje', models.CharField(max_length=200)),
            ],
        ),
    ]
