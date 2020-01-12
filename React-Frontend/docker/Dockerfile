FROM node:10.16.3

LABEL maintainer="kyle.blue.nuttall@gmail.com"

RUN npm install -g yarn

RUN apt-get update && \
	apt-get install --yes git wget zsh && \
	chsh -s /usr/bin/zsh root && \
	wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh

EXPOSE 28292
ENV PORT=28292

WORKDIR /app

ENTRYPOINT /app/docker/container_startup.sh