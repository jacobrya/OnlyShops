from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer, CustomTokenObtainPairSerializer
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated


# Регистрация пользователя (только создание, без токенов)
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Получение JWT-токенов (возврат access, refresh и role)
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    serializer = CustomTokenObtainPairSerializer(data=request.data)
    if serializer.is_valid():
        return Response(serializer.validated_data, status=status.HTTP_200_OK)
    return Response(
        {"error": "Invalid credentials", "details": serializer.errors},
        status=status.HTTP_400_BAD_REQUEST
    )

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected_view(request):
    return Response({"message": f"Hello, {request.user.username}. You're authenticated!"})

