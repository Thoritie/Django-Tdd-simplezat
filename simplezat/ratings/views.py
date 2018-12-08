from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView


class RatingView(TemplateView):
    template = 'ratings.html'

    def get(self, request):
        return render(
            request,
            self.template
        )
