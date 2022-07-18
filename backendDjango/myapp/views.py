from django.contrib.auth import get_user_model
from rest_framework import generics
from myapp.models import Restaurant, Boutique, Ngo
from .permissions import IsAuthorOrReadOnly # new
from .serializers import (
RestaurantSerializer ,
BoutiqueSerializer, 
NgoSerializer,
UserSerializer,
# ContactSerializer,
)

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

class UserDetail(generics.RetrieveUpdateDestroyAPIView): # new
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


# from django.core.mail import send_mail
# from rest_framework import serializers, status, views
# from rest_framework.response import Response


# class ContactSerializer(serializers.Serializer):
#     name = serializers.CharField()
#     email = serializers.EmailField()
#     # add other fields


# class ContactView(views.APIView):
#     def post(self, request, *args, **kwargs):
#         serializer = ContactSerializer(request.data)
#         if serializer.is_valid():
#             data = serializer.validated_data
#             email = data.get('email')
#             firstname = data.get('firstname')
#             send_mail(
#                 'Sent email from {}'.format(firstname),
#                 'Here is the message. {}'.format(data.get('message')),
#                 email,
#                 ['to@example.com'],
#                 fail_silently=False,
#             )
#             return Response({"success": "Sent"})
#         return Response({'success': "Failed"}, status=status.HTTP_400_BAD_REQUEST)