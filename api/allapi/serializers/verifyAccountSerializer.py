from rest_framework import serializers
from allapi.models import User
    
class VerifyAccountSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField()
    class Meta:
        model = User
        fields = ['email', 'otp']