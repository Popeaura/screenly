from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from .models import Candidate, Evaluator, Question, Evaluation, Result
from .serializers import (
    CandidateSerializer,
    EvaluatorSerializer,
    QuestionSerializer,
    EvaluationSerializer,
    ResultSerializer,
)

# 🔐 JWT-protected test endpoint
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def test_api(request):
    return Response({
        "message": "JWT authentication working",
        "user": request.user.username
    })


# 🔐 Candidate APIs
class CandidateViewSet(viewsets.ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
    permission_classes = [IsAuthenticated]


# 🔐 Evaluator APIs
class EvaluatorViewSet(viewsets.ModelViewSet):
    queryset = Evaluator.objects.all()
    serializer_class = EvaluatorSerializer
    permission_classes = [IsAuthenticated]


# 🔐 Question APIs
class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]


# 🔐 Evaluation APIs
class EvaluationViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer
    permission_classes = [IsAuthenticated]


# 🔐 Result APIs
class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    permission_classes = [IsAuthenticated]
