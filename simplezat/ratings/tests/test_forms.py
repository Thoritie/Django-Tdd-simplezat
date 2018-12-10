from django import forms
from django.test import TestCase

from ..forms import RatingForm
from ..models import Rating


class RatingFormTest(TestCase):
    def setUp(self):
        self.form = RatingForm()

    def test_form_should_have_define_field(self):
        expected_field = [
            'sentiment',
            'comment',
        ]
        for each in expected_field:
            self.assertTrue(each in self.form.fields)
        self.assertEqual(len(self.form.fields), 2)

    def test_form_should_have_correct_field_and_widget(self):
        self.assertIsInstance(
            self.form.fields['sentiment'].widget,
            forms.HiddenInput
        )
        self.assertIsInstance(
            self.form.fields['comment'].widget,
            forms.Textarea
        )

    def test_form_with_invalid_input_should_be_invalid(self):
        data = {
            'sentiment': 'positive',
            'comment': '',
        }
        form = RatingForm(data=data)
        self.assertFalse(form.is_valid())

    def test_form_with_valid_input_should_be_valid(self):
        data = {
            'sentiment': 'positive',
            'comment': 'You did great!',
        }

        form = RatingForm(data=data)
        self.assertTrue(form.is_valid())

    def test_form_with_valid_input_should_be_save(self):
        data = {
            'sentiment': 'positive',
            'comment': 'You did great!',
        }

        form = RatingForm(data=data)
        form.is_valid()
        form.save()

        rating = Rating.objects.last()
        self.assertEqual(rating.sentiment, 'positive')
        self.assertEqual(rating.comment, 'You did great!')
