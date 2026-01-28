from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EvaluationViewSet, evaluation_stats

router = DefaultRouter()
router.register(r"evaluations", EvaluationViewSet, basename="evaluation")

urlpatterns = [
    path("", include(router.urls)),
    path("evaluations/stats/", evaluation_stats, name="evaluation_stats"),
]
