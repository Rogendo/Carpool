from django.contrib import admin
from .models import PassengerAccount 


class DriverAdmin(admin.ModelAdmin):
    list_display = ('email','name','phone','id_number')
    
admin.site.register(PassengerAccount,DriverAdmin)
# admin.site.register(PassengerAccount)