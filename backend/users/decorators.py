from django.contrib.auth import REDIRECT_FIELD_NAME
from django.contrib.auth.decorators import user_passes_test


def passenger_required(function=None, redirect_field_name=REDIRECT_FIELD_NAME,login_url='login'):
    '''
    Decoretor for views that checks that the logged in user is a passenger,
    redirects to the log-in page if necessary.
    '''
    actual_decorator= user_passes_test(
        lambda u: u.is_active and u.is_passenger,
        login_url=login_url,
        redirect_field_name=redirect_field_name
    )
    if function:
        return actual_decorator(function)
    return actual_decorator

def driver_required(function=None, redirect_field_name=REDIRECT_FIELD_NAME,login_url='login'):
    '''
    Decoretor for views that checks that the logged in user is a driver,
    redirects to the log-in page if necessary.
    '''
    actual_decorator= user_passes_test(
        lambda u: u.is_active and u.is_driver,
        login_url=login_url,
        redirect_field_name=redirect_field_name
    )
    if function:
        return actual_decorator(function)
    return actual_decorator
