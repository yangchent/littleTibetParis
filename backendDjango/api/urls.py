from django.urls import path
from .views import RestaurantAPIView, BoutiqueAPIView, NgoAPIView

urlpatterns = [
    path('restaurants/', RestaurantAPIView.as_view()),
    path('shops/', BoutiqueAPIView.as_view()),
    path('ngos/', NgoAPIView.as_view()),
]