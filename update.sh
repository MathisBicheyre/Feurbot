sudo docker rm --force feurbot
sudo docker build -t my-bot .
sudo docker run --name feurbot -d my-bot
