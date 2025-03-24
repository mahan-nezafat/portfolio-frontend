FROM node:20-alpine


WORKDIR /frontend

COPY package*.json ./

COPY . .

RUN npm install



EXPOSE 3000
RUN chown -R root:root /frontend
RUN chmod 755 /frontend
USER root

CMD ./setup.sh