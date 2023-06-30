from rest_framework import generics, permissions

from prayer.models import Congregation
from prayer.serializers import CongregationSerializer


class CongregationListView(generics.ListAPIView):
    serializer_class = CongregationSerializer
    permission_classes = [
        permissions.AllowAny,
    ]

    def get_queryset(self):
        return Congregation.objects.filter(floor_id=self.kwargs.get('pk'))
