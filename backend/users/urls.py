from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path("passenger/", views.passenger_home, name="passenger-home"),
    path("driver/", views.driver_home, name="driver-home"),
    path("login/", views.LoginView.as_view(), name="login"),
    path("signup/passenger/", views.PassengerSignUpForm.as_view(), name="passenger-signup"),
    path("signup/driver/", views.DriverSignUpForm.as_view(), name="driver-signup"),
    path('logout/', auth_views.LogoutView.as_view(template_name="users/logout.html"), name="logout"),
    ]
