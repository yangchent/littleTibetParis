from django.urls import path
from .views import (
RestaurantAPIView, 
BoutiqueAPIView, 
NgoAPIView,
RestaurantDetailsAPIView,
BoutiqueDetailsAPIView, 
NgoDetailsAPIView,
# ContactView,
)
urlpatterns = [
    path('restaurants/', RestaurantAPIView.as_view()),
    path('restaurant/<int:pk>/', RestaurantDetailsAPIView.as_view()),
    path('shops/', BoutiqueAPIView.as_view()),
    path('shop/<int:pk>/', BoutiqueDetailsAPIView.as_view()),
    path('ngos/', NgoAPIView.as_view()),
    path('ngo/<int:pk>/', NgoDetailsAPIView.as_view()),
    # path('contact/<int:pk>/', ContactView.as_view()),
]