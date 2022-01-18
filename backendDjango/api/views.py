from rest_framework import generics
from myapp.models import Restaurant, Boutique, Ngo
from .serializers import RestaurantSerializer ,BoutiqueSerializer, NgoSerializer

class RestaurantAPIView(generics.ListAPIView):
    queryset = Restaurant.objects.all()
    erializer_class = RestaurantSerializer

class BoutiqueAPIView(generics.ListAPIView):
    queryset = Boutique.objects.all()
    serializer_class = BoutiqueSerializer

class NgoAPIView(generics.ListAPIView):
    queryset = Ngo.objects.all()
    serializer_class = NgoSerializer