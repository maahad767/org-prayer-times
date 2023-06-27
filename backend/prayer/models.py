from django.db import models
from django.utils import timezone

from org.models import Office, Floor


class PrayerChoice(models.TextChoices):
    FAJR = "FAJR", "Fajr"
    ZUHR = "ZUHR", "Zuhr"
    ASR = "ASR", "Asr"
    MAGHRIB = "MAGHRIB", "Maghrib"
    ISHA = "ISHA", "Isha"


class Congregation(models.Model):
    prayer = models.CharField(
        max_length=10,
        choices=PrayerChoice.choices,
    )
    place = models.ForeignKey(Floor, on_delete=models.SET_NULL, null=True)
    time = models.TimeField(default=timezone.now)

    def __str__(self):
        return f'{self.get_prayer_display()} at {self.place} at {self.time.strftime("%I:%M %p")}'

    class Meta:
        ordering = ('time',)