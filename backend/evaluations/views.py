from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

# Mock storage for evaluations (temporary)
mock_evaluations = [
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

next_id = 3  # For auto-incrementing

@api_view(["GET", "POST"])
@permission_classes([AllowAny])
def evaluations_list(request):
    global next_id
    
    if request.method == "GET":
        return Response(mock_evaluations)
    
    elif request.method == "POST":
        data = request.data
        
        # Validate required fields
        if not data.get("candidate_name") or not data.get("title"):
            return Response(
                {"error": "candidate_name and title are required"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create new evaluation
        new_eval = {
            "id": next_id,
            "candidate_name": data.get("candidate_name"),
            "title": data.get("title"),
            "status": data.get("status", "Pending"),
            "score": data.get("score"),
        }
        
        mock_evaluations.append(new_eval)
        next_id += 1
        
        return Response(new_eval, status=status.HTTP_201_CREATED)

@api_view(["GET"])
def test_api(request):
    return Response({"message": "OK"})
