# Backend Django 

### Installation:

- Create virtual environment 
    py -m venv .venv
- Activate the Virtual environment
    .venv/Scripts/Activate.PS1
- Install django
     pip install django~=3.1.0

### Project 

- Create a new project with the startproject command:
    django-admin startproject config .
- Run migrate to sync the database with Django’s default settings:
    python manage.py migrate
- start up the local Django web server:
    python manage.py runserver

### create apps
- restaurant, boutique and NGO
    python manage.py startapp "restaurant/boutique/NGO"

### config/settings.py
    INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Local
    'restaurant', 
    'boutique', 
    'ngo', 
    ]

### Create database Model
    # restaurants/models.py
    from django.db import models
    class Restaurants(models.Model):
        name = models.CharField(max_length=150)
        address = models.CharField(max_length=250)
        city = models.CharField(max_length=64, default="Paris")
        zip_code = models.CharField(max_length=5, default="75001")
        phone = models.CharField(max_length=15)

        def __str__(self):
            return self.title
### Run migrate to update our database
     python manage.py makemigrations restaurant

### Admin create a super user and update admin
     python manage.py createsuperuser

    # restaurants/admin.py
    from django.contrib import admin
    from .models import Restaurant
    
    admin.site.register(Restaurant)
### Create views
    # restaurants/views.py
    from django.views.generic import ListView
    from .models import Restaurant

    class RestaurantListView(ListView):
        model = Restaurant
        template_name = 'restaurant_list.html'

### Create urls
    # config/urls.py
    from django.contrib import admin
    from django.urls import path, include # new
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('restaurants.urls')), # new
    ]
### create a file restaurants/urls.py
    # restaurants/urls.py
    from django.urls import path
    from .views import RestaurantListView
    urlpatterns = [
        path('', RestaurantListView.as_view(), name='home'),
    ]
## Templates  
    touch restaurant/templates/restaurant_list.html
    <h1>All books</h1>
        {% for book in object_list %}
        <ul>
        <li>Title: {{ book.title }}</li>
        <li>Subtitle: {{ book.subtitle }}</li>
        <li>Author: {{ book.author }}</li>
        <li>ISBN: {{ book.isbn }}</li>
        </ul>
        {% endfor %}
chapter:2 Till page27 to be continued