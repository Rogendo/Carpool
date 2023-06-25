from django.contrib import admin
from .models import User, Passenger, Driver

class UserAdmin(admin.ModelAdmin):
    list_display = ('email','is_driver','is_passenger')

class PassengerAdmin(admin.ModelAdmin):
    list_display = ('user','email','first_name','last_name','ID_no','created_at')

class DriverAdmin(admin.ModelAdmin):
    list_display = ('user','email','first_name','last_name','ID_no','created_at','licence_no')
    
admin.site.register(User,UserAdmin)
admin.site.register(Passenger,PassengerAdmin)
admin.site.register(Driver,DriverAdmin)
