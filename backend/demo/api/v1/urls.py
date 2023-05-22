
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import DemoFieldsViewSet
router = DefaultRouter()
router.register('demofields', DemoFieldsViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
