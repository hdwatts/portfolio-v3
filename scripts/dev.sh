if [ -z "$1" ]; then
	docker-compose up -d
else
	docker-compose up -d --build
fi