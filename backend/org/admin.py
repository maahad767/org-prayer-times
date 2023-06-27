from django.contrib import admin

from org.models import Floor, Office


class FloorInline(admin.TabularInline):
    model = Floor
    extra = 1


class OfficeAdmin(admin.ModelAdmin):
    inlines = [FloorInline]


admin.site.register(Office, OfficeAdmin)
