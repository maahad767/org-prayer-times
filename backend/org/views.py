from rest_framework import generics, permissions

from org.models import Office, Floor
from org.serializers import (
    OfficeListSerializer,
    OfficeDetailSerializer,
    FloorDetailSerializer, FloorListSerializer,
)


class OfficeListView(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = OfficeListSerializer
    queryset = Office.objects.all()


class OfficeRetrieveView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = OfficeDetailSerializer
    queryset = Office.objects.all()


class FloorListView(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = FloorListSerializer

    def get_queryset(self):
        return Floor.objects.filter(office_id=self.kwargs.get("pk"))


class FloorRetrieveView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = FloorDetailSerializer

    def get_queryset(self):
        return Floor.objects.filter(id=self.kwargs.get("pk"))
