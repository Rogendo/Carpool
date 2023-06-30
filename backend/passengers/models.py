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


class PassengerAccount(AbstractBaseUser,PermissionsMixin):
    email=models.EmailField(max_length=100,unique=True)
    name = models.CharField(max_length=100)
    phone=models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    id_number = models.CharField(max_length=8)
    groups = models.ManyToManyField(Group,related_name="passener_accounts")
    user_permissions = models.ManyToManyField(Permission,related_name="passenger_accounts")

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
# Create your models here.
