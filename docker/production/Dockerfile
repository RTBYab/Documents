FROM node:lts

WORKDIR /app

COPY /app/package.json ./

RUN npm i --omit=dev --force

COPY /app ./

RUN npm run build

EXPOSE 1604

CMD npm run serve -- --port 1604