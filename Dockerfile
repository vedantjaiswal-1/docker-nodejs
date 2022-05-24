FROM node:latest

WORKDIR /docker-nodejs

COPY package*.json ./

RUN yarn install

COPY .  .

EXPOSE 4000

CMD ["yarn" , "start"]