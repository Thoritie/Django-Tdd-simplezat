#!/bin/sh

cd simplezat
pipenv run python manage.py migrate --settings=simplezat.settings.prod
pipenv run python manage.py collecstatic --noinput --settings=simplezat.settings.prod
pipenv run uwsgi --ini uwgsi.prod.ini
