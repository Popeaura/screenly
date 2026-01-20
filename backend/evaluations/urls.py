from rest_framework.routers import DefaultRouter
from .views import (
    CandidateViewSet,
    EvaluatorViewSet,
    QuestionViewSet,
    EvaluationViewSet,
    ResultViewSet,
)

router = DefaultRouter()
router.register("candidates", CandidateViewSet)
router.register("evaluators", EvaluatorViewSet)
router.register("questions", QuestionViewSet)
router.register("evaluations", EvaluationViewSet)
router.register("results", ResultViewSet)

urlpatterns = router.urls
