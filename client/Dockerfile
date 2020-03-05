FROM node:latest

WORKDIR /usr/src/app

COPY . /usr/src/app

# RUN npm install
RUN npm install -g @vue/cli

EXPOSE 8080

CMD ["npm", "run", "serve"]
