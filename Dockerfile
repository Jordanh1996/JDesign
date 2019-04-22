FROM node:8

WORKDIR /usr/app

COPY ./package.json .
RUN npm install --silent

COPY . .

RUN npm rebuild node-sass

RUN npm link

CMD ["npm", "start"]
