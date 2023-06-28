# Dockerfile for React client

# Build react client
FROM node:18.16-alpine

# Working directory be app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies

RUN apk add --no-cache python3 make g++

RUN npm install 

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]
