FROM node:20-alpine


WORKDIR /frontend

COPY package*.json ./

COPY . .

RUN npm install



EXPOSE 3000

USER root
CMD ./setup.sh