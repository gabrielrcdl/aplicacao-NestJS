
FROM node:14.17.1-alpine3.12

RUN apk add --no-cache bash

RUN npm install -g npm@8.6.0

RUN usermod -u 1000 postgres

RUN  npm install -g @nestjs/cli

RUN npm install -g webpack

USER node

WORKDIR /home/node/app





