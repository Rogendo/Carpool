# import the required libraries
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)
    is_passenger = models.BooleanField(default=False)
    is_driver = models.BooleanField(default=False)
  
class Passenger(models.Model):
    email=models.EmailField(User)

    user = models.OneToOneField(User, on_delete=models.CASCADE,primary_key=True, related_name='passenger')
    first_name = models.CharField(max_length=100)
    last_name= models.CharField(max_length=100)
    ID_no = models.IntegerField()
    created_at=models.DateTimeField(default=timezone.now)
    def __str__(self):
        return str(self.user)
    
class Driver(models.Model):
    email=models.EmailField(User)
    user=models.OneToOneField(User, on_delete=models.CASCADE,primary_key=True, related_name='driver')
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    ID_no = models.IntegerField()
    licence_no = models.CharField(max_length=15)
    created_at = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return str(self.user)