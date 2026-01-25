from django.urls import path
from . import views

urlpatterns = [
    path("test/", views.test_api, name="test_api"),
    path("evaluations/", views.evaluations_list, name="evaluations_list"),
    path("evaluations/<int:pk>/", views.evaluation_detail, name="evaluation_detail"),  # NEW
]
