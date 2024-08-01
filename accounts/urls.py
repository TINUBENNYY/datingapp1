from django.urls import path
from .views import IndexView, SignupView, LoginView, ProfileView, JobStatusView, RelationshipSelectionView, AdditionalDetailsView

app_name = 'accounts'

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('job_status/', JobStatusView.as_view(), name='job_status'),
    path('relationship_selection/', RelationshipSelectionView.as_view(), name='relationship_selection'),
    path('additional_details/', AdditionalDetailsView.as_view(), name='additional_details'),
]
