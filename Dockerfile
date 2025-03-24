FROM node:20-alpine


WORKDIR /frontend

COPY package*.json ./

COPY . .

RUN npm install



EXPOSE 3000


CMD ["npm","run", "build", "&", "npm", "run","start"]
