from django.urls import path
from .views import *

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/refresh/', RefreshTokenView.as_view(), name='refresh'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('profile/<int:pk>/', UserProfileDetailView.as_view(), name='user-profile-detail'),
    path('categories/', CategoryListCreateView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),
    path('products/', ProductListCreateView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('cart/', CartView.as_view(), name='cart'),
    path('cart/clear/', CartClearView.as_view(), name='cart-clear'),
    path('orders/', OrderListView.as_view(), name='order-list'),
    path('orders/create/', OrderCreateView.as_view(), name='order-create'),
    path('orders/<int:pk>/', OrderDetailView.as_view(), name='order-detail'),
    path('user-orders/', UserOrdersView.as_view(), name='user-orders'),
    path('orders/<int:pk>/action/', OrderActionView.as_view(), name='order-action'),
    path('seller/pending-orders/', PendingSellerOrdersView.as_view(), name='pending-seller-orders'),
]