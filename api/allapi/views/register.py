from rest_framework.response import Response
from ..serializers.userSerializer import UserSerializer
from rest_framework.views import APIView
from ..utils.emails import *
from rest_framework import status


class RegisterAPI(APIView):
    def post(self, request, *args, **kwargs):
        try:
            serializer = UserSerializer(data=request.data)
            print(serializer)
            
            if serializer.is_valid():
                user = serializer.save()
                print(user)
                send_otp_via_email(serializer.data['email'])
                return Response({
                    'status': 200,
                    'message': 'Registration successful. Please check your email.',
                    'data': serializer.data,
                    # 'token': AuthToken.objects.create(user)[1]
                })

            else:
                return Response({
                    'status': 400,
                    'message': 'User already exists',
                    'errors': serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({
                'status': 500,
                'message': 'An error occurred during registration',
                'error': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)