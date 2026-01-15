from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Candidate, Evaluator, Question
from .models import Evaluation, Result

class ResultInline(admin.TabularInline):
    model = Result
    extra = 1 

class EvaluationAdmin(admin.ModelAdmin):
    inlines = [ResultInline]
    filter_horizontal = ('questions',)

# Registering my  models here
admin.site.register(Candidate)
admin.site.register(Evaluator)
admin.site.register(Question)
admin.site.register(Evaluation, EvaluationAdmin)
admin.site.register(Result)