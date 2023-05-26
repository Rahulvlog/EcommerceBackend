from .views.login import LoginAPI
from .views.register import RegisterAPI
from .views.otpverify import VerifyOTP

from django.urls import path, include
# from django.urls import include, re_path

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('verify/', VerifyOTP.as_view(), name='Verify'),
    path('login/', LoginAPI.as_view(), name='login'),
]