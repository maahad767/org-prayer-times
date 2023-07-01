from django.urls import path

from org.views import OfficeListView, OfficeRetrieveView, FloorListView, FloorRetrieveView


urlpatterns = [
    path("offices/", OfficeListView.as_view(), name="office_list"),
    path("offices/<int:pk>/", OfficeRetrieveView.as_view(), name="office_retrieve"),
    path("offices/<int:pk>/floors/", FloorListView.as_view(), name="floor_list"),
    path("offices/floors/<int:pk>/", FloorRetrieveView.as_view(), name="floor_retrieve"),
]
