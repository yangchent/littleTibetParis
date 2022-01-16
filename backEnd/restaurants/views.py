from django.views.generic import ListView
from .models import Restaurant

class RestaurantListView(ListView):
    model = Restaurant
    template_name = 'restaurant_list.html'