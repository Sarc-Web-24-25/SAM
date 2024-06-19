from django.db import models

class Student(models.Model):
  CITY_CHOICES = [
    ('Mumbai', 'Mumbai'),
    ('Pune', 'Pune'),
    ('Jaipur', 'Jaipur'),
    ('Hyderabad', 'Hyderabad'),
  ]

  first_name = models.CharField(max_length=30)
  last_name = models.CharField(max_length=30)
  email = models.EmailField(unique=True)
  phone_number = models.CharField(max_length=15)
  city = models.CharField(max_length=50, choices=CITY_CHOICES)
  comment = models.TextField(blank=True, null=True)

  def __str__(self):
    return f'{self.first_name} {self.last_name}'