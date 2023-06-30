from rest_framework import serializers

from org.models import Floor, Office
from prayer.serializers import CongregationSerializer


class FloorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Floor
        fields = [
            "id",
            "number",
            "imam",
        ]


class FloorDetailSerializer(serializers.ModelSerializer):
    congregations = CongregationSerializer(read_only=True, many=True)

    class Meta:
        model = Floor
        fields = [
            "id",
            "number",
            "imam",
            "congregations",
        ]


class OfficeListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Office
        fields = [
            "id",
            "name",
            "address",
        ]


class OfficeDetailSerializer(serializers.ModelSerializer):
    floors = FloorListSerializer(many=True, read_only=True)

    class Meta:
        model = Office
        fields = [
            "id",
            "name",
            "address",
            "floors",
        ]
