from rest_framework import serializers
# from backendDjango.myapp.models import Contact
from myapp.models import Restaurant, Boutique, Ngo
from django.contrib.auth import get_user_model # new

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

# class ContactSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Contact
#         fields ="__all__"

class UserSerializer(serializers.ModelSerializer): # new
    class Meta:
        model = get_user_model()
        fields = ('id', 'username',)