from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Evaluation(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("in_review", "In review"),
        ("completed", "Completed"),
        ("rejected", "Rejected"),
    ]

    candidate_name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pending")
    score = models.PositiveIntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        User, null=True, blank=True, on_delete=models.SET_NULL, related_name="evaluations"
    )

    def __str__(self):
        return f"{self.candidate_name} – {self.title}"
