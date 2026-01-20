from rest_framework import serializers
from .models import (
    Candidate,
    Evaluator,
    Question,
    Evaluation,
    Result
)


class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = "__all__"


class EvaluatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluator
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"


class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = "__all__"


class EvaluationSerializer(serializers.ModelSerializer):
    candidate = CandidateSerializer(read_only=True)
    evaluator = EvaluatorSerializer(read_only=True)
    results = ResultSerializer(source="result_set", many=True, read_only=True)

    class Meta:
        model = Evaluation
        fields = [
            "id",
            "candidate",
            "evaluator",
            "questions",
            "completed",
            "created_at",
            "results",
        ]
