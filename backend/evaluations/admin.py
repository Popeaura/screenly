from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Candidate, Evaluator, Question, Evaluation, Result

# Registering my  models here
admin.site.register(Candidate)
admin.site.register(Evaluator)
admin.site.register(Question)
admin.site.register(Evaluation)
admin.site.register(Result)