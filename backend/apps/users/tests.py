from rest_framework.test import APITestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
class MeEndpointTestCase(APITestCase):
    
    def setUp(self):
        User = get_user_model()
        self.user = User.objects.create_user(
            username='test_user',
            password='test123'
        )
    
    def test_me_endpoint_unauthorized_returns_401(self):
        response = self.client.get(reverse("me"))
        self.assertEqual(response.status_code, 401)
        
    def test_me_endpoint_authorized_returns_200(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(reverse("me"))
        self.assertEqual(response.status_code, 200)