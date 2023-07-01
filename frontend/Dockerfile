FROM node:18.16-alpine
WORKDIR /app/frontend

COPY package.json yarn-lock.json /app/frontend/

CMD npm install -g yarn

RUN yarn install
COPY . /app/frontend/

EXPOSE 3000