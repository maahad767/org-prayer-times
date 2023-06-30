from rest_framework import serializers

from prayer.models import Congregation


class CongregationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Congregation
        fields = [
            "id",
            "prayer",
            "time",
        ]
