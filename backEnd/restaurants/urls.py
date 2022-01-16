from django.urls import path
from .views import RestaurantListView

urlpatterns = [
    path('', RestaurantListView.as_view(), name='home'),
]