FROM node:18-alpine

ADD ./ /app
WORKDIR /app

RUN yarn install

RUN yarn build

CMD ["yarn", "run", "start"]