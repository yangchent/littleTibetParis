from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=150)
    address = models.CharField(max_length=250)
    city = models.CharField(max_length=64, default="Paris")
    Zip_code = models.CharField(max_length=5, default="75001")
    phone = models.CharField(max_length=15)
    
    def __str__(self):
        return self.name

class Boutique(models.Model):
    name = models.CharField(max_length=150)
    address = models.CharField(max_length=250)
    city = models.CharField(max_length=64, default="Paris")
    Zip_code = models.CharField(max_length=5, default="75001")
    phone = models.CharField(max_length=15)
    
    def __str__(self):
        return self.name

class Ngo(models.Model):
        name = models.CharField(max_length=150)
        address = models.CharField(max_length=250)
        city = models.CharField(max_length=64, default="Paris")
        Zip_code = models.CharField(max_length=5, default="75001")
        phone = models.CharField(max_length=15)
    
        def __str__(self):
            return self.name