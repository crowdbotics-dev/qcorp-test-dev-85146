from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HomeViewSet,PartyTimeViewSet,TTViewSet,TttttttViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('home', HomeViewSet )
router.register('partytime', PartyTimeViewSet )
router.register('tt', TTViewSet )
router.register('ttttttt', TttttttViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
