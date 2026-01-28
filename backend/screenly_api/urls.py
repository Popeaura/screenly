from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

User = get_user_model()


@api_view(["POST"])
@permission_classes([AllowAny])
def signup(request):
    username = request.data.get("username")
    password = request.data.get("password")

    if not username or not password:
        return Response(
            {"detail": "Username and password are required."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    if User.objects.filter(username=username).exists():
        return Response(
            {"detail": "Username already taken."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    User.objects.create_user(username=username, password=password)
    return Response(
        {"detail": "Account created successfully."},
        status=status.HTTP_201_CREATED,
    )


urlpatterns = [
    path("admin/", admin.site.urls),

    # Auth
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/signup/", signup, name="signup"),

    # App APIs
    path("api/", include("evaluations.urls")),
]
