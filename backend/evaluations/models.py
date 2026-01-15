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

class Evaluator(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=100, default="Teacher/HR")
    created_at = models.DateTimeField(auto_now_add=True)   


    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Question(models.model):
    QUESTION_TYPES = [
        ('MCQ', 'Multiple Choice'),
        ('TF', 'True/False'),
        ('SA', 'Short Answer'),
    ]

    text = models.TextField()  
        question_type = models.CharField(max_length=10, choices=QUESTION_TYPES, default='MCQ')
    max_score = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)  

def __str__(self):
        return f"{self.text[:50]}..."


        