from rest_framework import serializers
from .models import User, Category, Product
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])

    role = serializers.ChoiceField(choices=[('user', 'User'), ('seller', 'Seller')], default='user')  # только user и seller

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role']
    
    def validate_email(self, value):
            if User.objects.filter(email=value).exists():
                raise serializers.ValidationError("This email is already in use.")
            return value
    
    def create(self, validated_data):
        role = validated_data.get('role')
        if role == 'admin':
            raise serializers.ValidationError("какой из тебя админ lmao!")
        
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            role=role
        )
        return user

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['role'] = user.role
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data['role'] = self.user.role
        return data

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'price', 'image_url', 'stock', 'category', 'seller', 'created_at']

# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = '__all__'

# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = '__all__'

# class CustomerSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     phone = serializers.CharField()
#     address = serializers.CharField()

# class OrderSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     customer = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all())
#     created_at = serializers.DateTimeField(read_only=True)
#     status = serializers.CharField()


