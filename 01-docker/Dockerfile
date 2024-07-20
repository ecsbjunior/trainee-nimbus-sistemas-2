FROM node:20-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY ./src/ ./src/

EXPOSE 3333

CMD ["npm", "run", "start"]
