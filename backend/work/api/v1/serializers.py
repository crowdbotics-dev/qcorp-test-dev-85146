from rest_framework import serializers
from work.models import Employment

class EmploymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employment
        fields = "__all__"