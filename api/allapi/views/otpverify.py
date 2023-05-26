from rest_framework.response import Response
from ..serializers.verifyAccountSerializer import VerifyAccountSerializer
from ..models import User
from rest_framework.views import APIView
from ..utils.emails import *
from rest_framework import status
from ..utils.token import generate_access_token

class VerifyOTP(APIView):
    def post(self, request, *args, **kwargs):
        try:
            serializer = VerifyAccountSerializer(data=request.data)
          
            if serializer.is_valid():
               
                email = serializer.data['email']
                otp = serializer.data['otp']
                user = User.objects.filter(email=email)
                if not user.exists():

                    return Response({'message': 'something went wrong',
                                     "data": 'Invalid email'}, status=status.HTTP_400_BAD_REQUEST)

           
                if user[0].otp != otp:
                    return Response({'message': 'something went wrong',
                                     "data": 'wrong otp'}, status=status.HTTP_302_FOUND)
            
                access_token = generate_access_token(user[0])
                user = user.first()
                user.is_verified = True
                user.save()

                return Response({"data": serializer.data, "access_token":access_token}, status=status.HTTP_200_OK)
        
            return Response({'message': 'something went wrong',
                             "data": 'Invalid data'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


        except Exception as e:
            print(e)
