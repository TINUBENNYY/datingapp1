from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = 'accounts/index.html'

class SignupView(TemplateView):
    template_name = 'accounts/signup.html'

    def post(self, request, *args, **kwargs):
        # Add signup logic here
        pass

class LoginView(TemplateView):
    template_name = 'accounts/login.html'

class ProfileView(TemplateView):
    template_name = 'accounts/personal_details.html'

class JobStatusView(TemplateView):
    template_name = 'accounts/job_status.html'

class RelationshipSelectionView(TemplateView):
    template_name = 'accounts/relationship_selection.html'

class AdditionalDetailsView(TemplateView):
    template_name = 'accounts/additional_details.html'
