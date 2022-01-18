from django.views.generic import ListView
from .models import Restaurant, Ngo , Boutique

class RestaurantListview(ListView):
    model = Restaurant
    template_name = 'restaurants/restaurant_list.html'

class NgoListview(ListView):
    model = Ngo
    template_name = 'ngos/ngo_list.html'

class BoutiqueListview(ListView):
    model = Boutique
    template_name = 'shops/shop_list.html'