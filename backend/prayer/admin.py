from django.contrib import admin

from prayer.models import Congregation


class CongregationAdmin(admin.ModelAdmin):
    list_display = ('prayer', 'place')


admin.site.register(Congregation, CongregationAdmin)
