from django.urls import path
from . import views

urlpatterns = [
    path("test/", views.test_api, name="test_api"),
    path("evaluations/", views.evaluations_list, name="evaluations_list"),
]
