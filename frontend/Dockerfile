FROM node:18.16-alpine
WORKDIR /app/frontend

COPY package.json package-lock.json /app/frontend/

RUN npm install
COPY . /app/frontend/

EXPOSE 3000