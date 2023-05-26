from rest_framework import serializers
from allapi.models import User

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [ 'phone', 'is_verified']