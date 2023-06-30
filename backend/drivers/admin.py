
from django.contrib import admin
from .models import DriverAccount ,PostRide


class DriverAdmin(admin.ModelAdmin):
    list_display = ('email','name','phone','id_number','license_no')
    

class PostRideAdmin(admin.ModelAdmin):
    list_display = ('destination','drivername','pickup','slug','updated_on','travel_date','passengers_no','cost','vehicle_model','vehicle_condition','plate_number','status')
    
admin.site.register(DriverAccount,DriverAdmin)    
admin.site.register(PostRide,PostRideAdmin)