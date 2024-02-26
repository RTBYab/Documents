FROM node

WORKDIR /app

COPY /app/package.json ./

RUN npm i --omit=dev

ADD /app ./

RUN npm run build

EXPOSE 3000

CMD npm run serve