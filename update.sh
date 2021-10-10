docker stop feurbot
docker rm feurbot
docker build -t my-bot .
docker run --name feurbot -d my-bot
