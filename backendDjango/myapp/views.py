from rest_framework import generics
from myapp.models import Restaurant, Boutique, Ngo
from .permissions import IsAuthorOrReadOnly # new
from .serializers import RestaurantSerializer ,BoutiqueSerializer, NgoSerializer

class RestaurantAPIView(generics.ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class RestaurantDetailsAPIView(generics.RetrieveAPIView):
    permission_classes = (IsAuthorOrReadOnly,) # not needed but in future
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class BoutiqueAPIView(generics.ListAPIView):
    queryset = Boutique.objects.all()
    serializer_class = BoutiqueSerializer

class BoutiqueDetailsAPIView(generics.RetrieveAPIView):
    permission_classes = (IsAuthorOrReadOnly,) # not needed but in future
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class NgoAPIView(generics.ListAPIView):
    queryset = Ngo.objects.all()
    serializer_class = NgoSerializer

class NgoDetailsAPIView(generics.RetrieveAPIView):
    permission_classes = (IsAuthorOrReadOnly,) #not needed but in future
    queryset = Ngo.objects.all()
    serializer_class = NgoSerializer