from rest_framework import serializers
from myapp.models import Restaurant, Boutique, Ngo


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