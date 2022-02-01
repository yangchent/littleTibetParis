from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=150)
    address = models.CharField(max_length=250)
    city = models.CharField(max_length=64, default="Paris")
    Zip_code = models.CharField(max_length=5, default="75001")
    deliveroo = models.CharField(max_length=150, blank=True)
    uber = models.CharField(max_length=150, blank=True)
    link = models.CharField(max_length=150, blank=True)
    fork = models.CharField(max_length=150, blank=True)
    image= models.FileField(upload_to='media/images', blank=True)
    
    def __str__(self):
        return self.name

class Boutique(models.Model):
    name = models.CharField(max_length=150)
    address = models.CharField(max_length=250)
    city = models.CharField(max_length=64, default="Paris")
    Zip_code = models.CharField(max_length=5, default="75001")
    phone = models.CharField(max_length=15)
    link = models.CharField(max_length=200, blank=True)
    image= models.FileField(upload_to='media/images', blank=True)

    def __str__(self):
        return self.name

class Ngo(models.Model):
        name = models.CharField(max_length=150)
        address = models.CharField(max_length=250)
        city = models.CharField(max_length=64, default="Paris")
        Zip_code = models.CharField(max_length=5, default="75001")
        phone = models.CharField(max_length=15)
        link = models.CharField(max_length=200, blank=True)
        type = models.CharField(max_length=200, blank=True)
        image= models.FileField(upload_to='media/images', blank=True)

        def __str__(self):
            return self.name

