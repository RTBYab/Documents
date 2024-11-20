FROM node:lts

WORKDIR /app

COPY /app/package.json ./

RUN npm i --omit=dev

COPY /app ./

RUN npm run build

EXPOSE 2087

CMD npm run serve -- --port 2087