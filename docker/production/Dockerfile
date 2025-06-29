FROM node:lts

WORKDIR /app

COPY /app/package.json ./

RUN npm config set registry https://mirror-npm.runflare.com

RUN npm i --omit=dev --force

COPY /app ./

RUN npm run build

EXPOSE 1604

CMD npm run serve -- --port 1604