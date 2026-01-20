from django.contrib import admin
from .models import Candidate, Evaluator, Question, Evaluation, Result


@admin.register(Candidate)
class CandidateAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "email", "applied_for", "created_at")
    search_fields = ("first_name", "last_name", "email")
    list_filter = ("applied_for",)
    ordering = ("-created_at",)


@admin.register(Evaluator)
class EvaluatorAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "email", "role", "created_at")
    search_fields = ("first_name", "last_name", "email")
    list_filter = ("role",)


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("text", "question_type", "max_score", "created_at")
    list_filter = ("question_type",)
    search_fields = ("text",)


class ResultInline(admin.TabularInline):
    model = Result
    extra = 0


@admin.register(Evaluation)
class EvaluationAdmin(admin.ModelAdmin):
    list_display = ("candidate", "evaluator", "completed", "created_at")
    list_filter = ("completed",)
    search_fields = ("candidate__first_name", "candidate__last_name")
    filter_horizontal = ("questions",)
    inlines = [ResultInline]


@admin.register(Result)
class ResultAdmin(admin.ModelAdmin):
    list_display = ("evaluation", "question", "score", "created_at")
    list_filter = ("score",)
