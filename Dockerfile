FROM node:16.14.2

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 8082 4000

CMD [ "yarn", "start" ]