from django.contrib import admin
from .models import User
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'email', 'phone', 'otp', 'image')

admin.site.register( User, UserAdmin )

