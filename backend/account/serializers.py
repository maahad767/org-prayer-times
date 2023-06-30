from rest_framework import serializers
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        email = validated_data.pop('email')
        password = validated_data.pop('password')
        user = UserModel.objects.create_user(
            email=email,
            password=password,
            **validated_data
        )
        return user

    class Meta:
        model = UserModel
        fields = ("id", "email", "password", "first_name", "last_name")
