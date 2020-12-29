FROM node:alpine

RUN mkdir -p /app

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app

RUN npm run build

RUN npx next telemetry disable

CMD [ "npm", "start" ]
