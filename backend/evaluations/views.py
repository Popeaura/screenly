from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

@api_view(["GET"])
@permission_classes([AllowAny])  # ← CHANGE THIS LINE
def evaluations_list(request):
    # Mock data for now
    data = [
        {
            "id": 1,
            "candidate_name": "Jane Doe",
            "title": "Frontend Engineer – Screening",
            "status": "In review",
            "score": None,
        },
        {
            "id": 2,
            "candidate_name": "John Smith",
            "title": "Backend Engineer – Interview",
            "status": "Completed",
            "score": 85,
        }
    ]
    return Response(data)

@api_view(["GET"])
def test_api(request):
    return Response({"message": "OK"})
