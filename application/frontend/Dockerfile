FROM node:18.17.0-alpine

WORKDIR /app

RUN apk update
RUN npm install -g npm@latest
COPY package*.json ./
RUN npm install --verbose
COPY . .

EXPOSE 3000