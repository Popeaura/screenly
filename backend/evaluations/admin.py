from django.contrib import admin
from .models import Evaluation


@admin.register(Evaluation)
class EvaluationAdmin(admin.ModelAdmin):
    list_display = ("id", "candidate_name", "title", "status", "score", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("candidate_name", "title")
