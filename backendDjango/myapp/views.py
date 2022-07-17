from allauth.account.utils import send_email_confirmation
from dj_rest_auth.registration.views import APIView, method_decorator
from django.contrib.auth import get_user_model
from django.http import request, response # new
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import csrf_exempt
from myapp.models import Restaurant, Boutique, Ngo
from .permissions import IsAuthorOrReadOnly # new
from .serializers import (
RestaurantSerializer ,
BoutiqueSerializer, 
NgoSerializer,
UserSerializer
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





# class VerifyEmailView(APIView):
#    permission_classes = [IsAuthenticated]

#     def post(self):
#         if request.user.email_verified:
#             return response {}




# from myapp.forms import ContactFormView
# from django.views.generic.edit import FormView

# class ContactFormView(FormView):
#     queryset = Contact.objects.all()
#     serializer_class = ContactSerializer

#     def form_valid(self, form):
#         # This method is called when valid form data has been POSTed.
#         # It should return an HttpResponse.
#         form.send_email()
#         return super().form_valid(form)