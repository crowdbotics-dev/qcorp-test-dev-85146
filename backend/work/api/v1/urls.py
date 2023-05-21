
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import EmploymentViewSet
router = DefaultRouter()
router.register('employment', EmploymentViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
