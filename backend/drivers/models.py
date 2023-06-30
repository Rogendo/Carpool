from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager,Group,Permission

class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None, phone=None):
        if not email:
            raise ValueError("Users must have an email address")
        
        email = self.normalize_email(email)
        # normalize email i.e. from Bryan@gmail.com to bryan@gmail.com
        user=self.model(email=email,name=name,phone=phone)
        
        user.set_password(password)
        user.save()#save the user
        
        return user
    def create_superuser(self, email, name, password=None, phone=None):
        user = self.create_user(email=email, name=name, password=password, phone=phone)
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user

class DriverAccount(AbstractBaseUser,PermissionsMixin):
    email=models.EmailField(max_length=100,unique=True)
    name = models.CharField(max_length=100)
    phone=models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    id_number = models.CharField(max_length=8)
    license_no = models.CharField(max_length=12)
    groups = models.ManyToManyField(Group,related_name="driver_accounts",blank=True)
    user_permissions = models.ManyToManyField(Permission,related_name="driver_accounts",blank=True)
    objects= UserAccountManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name','phone']
    
    def get_full_name(self):
        return self.name
    
    def get_short_name(self):
        return self.name
    
    def get_phone(self):
        return self.phone
    
    
    
    def __str__(self):
        return self.name
    
VehicleCondition = (
    ("new", "New"),
    ("old", "Old"),
    ("partially_new", "Partially New"),
    ("partially_old", "Partially Old"),
)

STATUS = (
    (0, "Draft"),
    (1, "Publish"),
)


class PostRide(models.Model):
    # drivername = models.ForeignKey(DriverAccount,on_delete=models.CASCADE)
    drivername = models.ForeignKey(DriverAccount, on_delete=models.CASCADE, related_name='post_rides')
    # phone=models.ForeignKey(DriverAccount,on_delete=models.CASCADE)
    # id_number=models.ForeignKey(DriverAccount,on_delete=models.CASCADE)
    destination = models.CharField(max_length=200)
    pickup=models.CharField(max_length=200)
    slug = models.SlugField(max_length=200)
    ride_description = models.CharField(max_length=500)
    updated_on = models.DateTimeField(auto_now_add= True)
    travel_date = models.DateTimeField()
    passengers_no = models.IntegerField()
    cost=models.IntegerField()
    vehicle_model=models.CharField(max_length=20)
    vehicle_condition=models.CharField(max_length=20, choices=VehicleCondition)
    plate_number=models.CharField(max_length=8)
    
    status = models.IntegerField(choices=STATUS, default=0)
    


    class Meta:
        ordering = ['-updated_on']

    def __str__(self):
        return self.destination
    
# class Rate(models.Model):
#     rate=models.IntegerField()
#     comment=models.TextField()
# Create your models here.
