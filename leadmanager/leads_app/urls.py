from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/leads_app', LeadViewSet, 'leads_app')

urlpatterns = router.urls
