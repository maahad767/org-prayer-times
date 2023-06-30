from django.urls import path

from .views import CongregationListView


urlpatterns = [
    path('<int:pk>/congregations/', CongregationListView.as_view(), name='congregation_list'),
]
