from django.contrib import admin
from .models import Candidate, Evaluator, Question, Evaluation, Result


# =========================
# Candidate Admin
# =========================
@admin.register(Candidate)
class CandidateAdmin(admin.ModelAdmin):
    list_display = (
        "first_name",
        "last_name",
        "email",
        "applied_for",
        "created_at",
    )
    search_fields = (
        "first_name",
        "last_name",
        "email",
        "applied_for",
    )
    list_filter = ("applied_for", "created_at")
    ordering = ("-created_at",)
    readonly_fields = ("created_at",)

    fieldsets = (
        ("Personal Info", {
            "fields": ("first_name", "last_name", "email", "phone")
        }),
        ("Application", {
            "fields": ("applied_for",)
        }),
        ("System", {
            "fields": ("created_at",)
        }),
    )


# =========================
# Evaluator Admin
# =========================
@admin.register(Evaluator)
class EvaluatorAdmin(admin.ModelAdmin):
    list_display = (
        "first_name",
        "last_name",
        "email",
        "role",
        "created_at",
    )
    search_fields = ("first_name", "last_name", "email")
    list_filter = ("role", "created_at")
    ordering = ("-created_at",)
    readonly_fields = ("created_at",)

    fieldsets = (
        ("Profile", {
            "fields": ("first_name", "last_name", "email", "role")
        }),
        ("System", {
            "fields": ("created_at",)
        }),
    )


# =========================
# Question Admin
# =========================
@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = (
        "short_text",
        "question_type",
        "max_score",
        "created_at",
    )
    list_filter = ("question_type",)
    search_fields = ("text",)
    ordering = ("-created_at",)
    readonly_fields = ("created_at",)

    def short_text(self, obj):
        return obj.text[:60]
    short_text.short_description = "Question"


# =========================
# Result Inline (inside Evaluation)
# =========================
class ResultInline(admin.TabularInline):
    model = Result
    extra = 0
    readonly_fields = ("created_at",)


# =========================
# Evaluation Admin
# =========================
@admin.register(Evaluation)
class EvaluationAdmin(admin.ModelAdmin):
    list_display = (
        "candidate",
        "evaluator",
        "completed",
        "total_score",
        "created_at",
    )
    list_filter = ("completed", "created_at")
    search_fields = (
        "candidate__first_name",
        "candidate__last_name",
        "evaluator__first_name",
        "evaluator__last_name",
    )
    ordering = ("-created_at",)
    readonly_fields = ("created_at", "total_score")

    filter_horizontal = ("questions",)
    inlines = [ResultInline]

    fieldsets = (
        ("Participants", {
            "fields": ("candidate", "evaluator")
        }),
        ("Evaluation Setup", {
            "fields": ("questions", "completed")
        }),
        ("Summary", {
            "fields": ("total_score", "created_at")
        }),
    )

    def total_score(self, obj):
        return sum(result.score for result in obj.result_set.all())
    total_score.short_description = "Total Score"


# =========================
# Result Admin
# =========================
@admin.register(Result)
class ResultAdmin(admin.ModelAdmin):
    list_display = (
        "evaluation",
        "question",
        "score",
        "created_at",
    )
    list_filter = ("score", "created_at")
    search_fields = ("question__text",)
    readonly_fields = ("created_at",)
