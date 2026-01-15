from django.db import models

# Create your models here.
class Candidate(models.model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    applied_for = models.CharField(max_length=200, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return f"{self.first_name} {self.last_name}"


class Evaluator(models.model):
    first_name = models.CharField(max_length=100)     