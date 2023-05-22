from rest_framework import serializers
from demo.models import DemoFields

class DemoFieldsSerializer(serializers.ModelSerializer):

    class Meta:
        model = DemoFields
        fields = "__all__"