#!/bin/sh

cd simplezat
pipenv run python manage.py migrate --settings=simplezat.settings.dev
pipenv run python manage.py collecstatic --noinput --settings=simplezat.settings.dev
pipenv run uwsgi --ini uwgsi.dev.ini
