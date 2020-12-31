---
title: Portfolio Project • Next.js + Docker
subtitle: Setting up a barebones Next.js Development Environment with Hot Reload Support + Production Images
published: true
datePublished: 2020-12-25
author: Howard Dean Watts
tags:
  - hdwatts
  - portfolio
  - docker
  - hot
  - reload
  - development
  - prod
  - dev
  - production
  - next
  - nextjs
authorPhoto: /img/profile.jpg
bannerPhoto: /img/brook.jpg
thumbnailPhoto: /img/brook.jpg
canonicalUrl: https://devii.dev/blog/devii
---

![Whale](/img/docker-next-js/docker-whale.png)

# Portfolio Project • Things I Wish I Knew Beforehand • Next.js + Docker

This year I wished. Overkill? You bet!

## Setting up

The goal was to have a barebones Next.js Development Environment with Hot
Reload Support + Production Images

This year I wished. Overkill? You bet!

## Production Config

Here is the production config. You'll note that `Dockerfile` is mostly the same
as `Dockerfile.dev`, with the exception of environment variables and the command
that gets ran (`npm run dev` vs `npm start`). If anyone has a better method for
handling Development vs Production commands please let me know!

### Dockerfile

```docker
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
```

### docker-compose.yml

```yml
version: '3'

services:
  nextjsprod:
    ports:
      - 3000:3000
    build:
      context: .
      dockerfile: Dockerfile
```

## Development Config

### Dockerfile.dev

```docker
FROM node:alpine

RUN mkdir -p /opt/app

ENV PORT 3000

EXPOSE 3000

WORKDIR /opt/app

COPY package.json /opt/app
COPY package-lock.json /opt/app

RUN npm install

COPY . /opt/app

RUN npx next telemetry disable

CMD [ "npm", "run", "dev" ]
```

### docker-compose.dev.yml

```yml
version: '3'

services:
  nextjs:
    ports:
      - 3000:3000
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - ./:/app
      - /app/node_modules
      - /app/.next
```

### next.config.js

```javascript
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}
```

## Scripts

### start-dev.sh

```bash
if [ -z "$1" ]; then
  docker-compose -f docker-compose.dev.yml up -d
else
  docker-compose -f docker-compose.dev.yml up -d --build
fi
```

### stop-dev.sh

```bash
docker-compose down
```

![Docker Running](/img/docker-next-js/docker.png)

![Localhost Running](/img/docker-next-js/localhost.png)
