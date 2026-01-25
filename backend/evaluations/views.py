from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.db.models import Count, Avg

from .models import Evaluation
from .serializers import EvaluationSerializer


class EvaluationViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all().order_by("-created_at")
    serializer_class = EvaluationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def evaluation_stats(request):
    total = Evaluation.objects.count()
    by_status = (
        Evaluation.objects.values("status")
        .annotate(count=Count("id"))
        .order_by()
    )
    avg_score = Evaluation.objects.aggregate(avg=Avg("score"))["avg"]

    status_map = {
        "pending": "Pending",
        "in_review": "In review",
        "completed": "Completed",
        "rejected": "Rejected",
    }

    data = {
        "total": total,
        "by_status": [
            {
                "status": row["status"],
                "label": status_map.get(row["status"], row["status"]),
                "count": row["count"],
            }
            for row in by_status
        ],
        "average_score": avg_score,
    }
    return Response(data)
