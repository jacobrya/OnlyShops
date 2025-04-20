from django.urls import path
from .views import register, login, protected_view

urlpatterns = [
    path('auth/register/', register, name='register'),
    path('auth/login/', login, name='login'),
    path('protected/', protected_view, name='protected_view'),
]