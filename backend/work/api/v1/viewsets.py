from rest_framework import authentication
from work.models import Employment
from .serializers import EmploymentSerializer
from rest_framework import viewsets

class EmploymentViewSet(viewsets.ModelViewSet):
    serializer_class = EmploymentSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Employment.objects.all()