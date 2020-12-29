if [ -z "$1" ]; then
	docker-compose -f docker-compose.dev.yml up -d
else
	docker-compose -f docker-compose.dev.yml up -d --build
fi