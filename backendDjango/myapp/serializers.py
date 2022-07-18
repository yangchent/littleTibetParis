from rest_framework import serializers

# from backendDjango.myapp.models import Contact
from myapp.models import Restaurant, Boutique, Ngo
from django.contrib.auth import get_user_model


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields ="__all__"


class BoutiqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Boutique
        fields ="__all__"

class NgoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ngo
        fields ="__all__"


class UserSerializer(serializers.ModelSerializer): 
    class Meta:
        model = get_user_model()
        fields = "__all__"



# from django.core.mail import send_mail


# class ContactCreateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Contact
#         fields = [
#             'firstname',
#             'lastname',
#             'email',
#             'message',
#         ]

#         def create(self, validate_data):
#             instance = super(ContactCreateSerializer, self).create(validate_data)
#             send_mail(
#                 'Instance {} has been created'.format(instance.pk),
#                 'Here is the message. DATA: {}'.format(validate_data),
#                 'from@example.com',
#                 ['to@example.com'],
#                 fail_silently=False,
#             )
#             return instance