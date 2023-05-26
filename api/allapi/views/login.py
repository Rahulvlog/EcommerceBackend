from rest_framework.response import Response
from ..serializers.loginSerializer import LoginSerializer
from ..models import User
from rest_framework.views import APIView
from ..utils.emails import *
from rest_framework import status

class LoginAPI(APIView):
    def post(self, request, *args, **kwargs):
        try:
            serializer = LoginSerializer(data=request.data)
          
            if serializer.is_valid():
              
                phone = serializer.data['phone']
                user = User.objects.filter(phone=phone)
                if user.exists():
                    send_otp_via_email( user[0].email)
                    
                    return Response({
                        'message': 'log in successfully',
                        "data": serializer.data, 
                        'email': user[0].email
                    }, status=status.HTTP_200_OK)
                    
                else:
                    return Response({
                        'message': 'your phone number is not valid"',
                    }, status=status.HTTP_400_BAD_REQUEST)
                    
            return Response({
                        'message': 'Something went worng"',
                    }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                    
        except Exception as e:
            print(e)  