from django.shortcuts import render
from django.shortcuts import redirect, render
from django.views.generic import CreateView
from .models import User
from .forms import PassengerSignUpForm, DriverSignUpForm, LoginForm
from django.contrib.auth import login
from django.contrib.auth import views as auth_views
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from .decorators import passenger_required, driver_required

# Create your views here.
class PassengerSignUpForm(CreateView):
    model = User
    form_class = PassengerSignUpForm
    template_name = 'users/passenger_signup.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'passenger'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('passenger-home')


class DriverSignUpForm(CreateView):
    model = User
    form_class = DriverSignUpForm
    template_name = 'users/driver_signup.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'driver'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('driver-home')


class LoginView(auth_views.LoginView):
    form_class = LoginForm
    template_name = 'users/login.html'

    def get_context_data(self, **kwargs):
        return super().get_context_data(**kwargs)

    def get_success_url(self):
        user = self.request.user
        if user.is_authenticated:
            if user.is_passenger:
                return reverse('passenger-home')
            elif user.is_driver:
                return reverse('driver-home')
        else:
            return reverse('login')


@login_required
@passenger_required
def passenger_home(request):
    
    return render(request, 'users/passenger_home.html')


@login_required
@driver_required
def driver_home(request):
    
    return render(request, 'users/driver_home.html')

