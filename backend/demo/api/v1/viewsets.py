from rest_framework import authentication
from demo.models import DemoFields
from .serializers import DemoFieldsSerializer
from rest_framework import viewsets

class DemoFieldsViewSet(viewsets.ModelViewSet):
    serializer_class = DemoFieldsSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = DemoFields.objects.all()