from django.urls import path
from .views import RestaurantListview , BoutiqueListview, NgoListview

urlpatterns = [
    path('restaurants/',RestaurantListview.as_view(), name='restaurant_list'),
    path('shops/', BoutiqueListview.as_view(), name='boutique_list'),
    path('ngos/', NgoListview.as_view(), name='ngo_list'),
]