FROM node:20-alpine


WORKDIR /frontend

COPY package*.json ./

COPY . .

RUN npm install

RUN npm build

EXPOSE 3000


CMD ["npm", "start"]