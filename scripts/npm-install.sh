#!/bin/bash

if [ -z "$1" ]; then
	docker-compose run --rm nextjs npm install
else
	docker-compose run --rm nextjs npm install $1
fi
docker-compose build --no-cache
docker-compose down
docker-compose up -d