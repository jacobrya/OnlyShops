from django.contrib import admin
from .models import User, Category, Product, Cart, Order, OrderItem
# Register your models here.

# Катеорию будет добавлять через админку <--------------------------------------
admin.site.register(Category)

admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(User)