# FROM nginx
FROM node:16 as builder

RUN apt-get update && apt-get install nodejs -y && apt-get install npm -y && apt-get clean

COPY nginx.conf ./etc/nginx/conf.d/default.conf

WORKDIR /Users/zhangyang/Documents/codes/learn/chat2me

COPY ./package*.json ./

RUN npm i -g pnpm

RUN pnpm install

COPY ./tsconfig.json ./

COPY ./server.sh ./

COPY src ./src

CMD ["sh", "./server.sh"]