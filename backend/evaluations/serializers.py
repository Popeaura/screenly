from rest_framework import serializers
from .models import Evaluation

class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = [
            "id",
            "candidate_name",
            "title",
            "status",
            "score",
            "created_at",
            "updated_at",
        ]
