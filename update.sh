sudo docker stop feurbot
sudo docker rm feurbot
sudo docker build -t my-bot .
sudo docker run --name feurbot -d my-bot
