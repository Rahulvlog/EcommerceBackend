from rest_framework import serializers
from allapi.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'email', 'phone', 'is_verified']