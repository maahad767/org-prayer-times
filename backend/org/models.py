from django.db import models


class Office(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=256, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)
        unique_together = ('name',)


class Floor(models.Model):
    office = models.ForeignKey(Office, on_delete=models.CASCADE, related_name='floors')
    number = models.IntegerField()
    imam = models.CharField(max_length=125, null=True, blank=True)

    def __str__(self):
        return f'{self.office} - {self.number}th floor'

    class Meta:
        unique_together = ('office', 'number')
