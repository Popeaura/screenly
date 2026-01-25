from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.db.models import Count, Avg

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def evaluation_stats(request):
    from .models import Evaluation

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

    return Response(
        {
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
    )
