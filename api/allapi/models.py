from django.db import models
from django.contrib.auth.models import AbstractUser
# from django.contrib.auth.models import User
from .managers.manager import UserManager


class User(AbstractUser):
    username = None
    email = models.EmailField( unique=True)
    phone = models.CharField(max_length=14)
    image = models.ImageField(upload_to="images", blank=True, null=True)
    
    is_verified = models.BooleanField(default=False)
    
    otp = models.CharField(max_length=4, blank=True, null=True)
    

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    objects = UserManager()
    
    def name(self):
        return self.first_name + ' ' + self.last_name