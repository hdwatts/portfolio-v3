FROM node:alpine as development

RUN mkdir -p /app && chown node:node /app
RUN mkdir -p /app/.next && chown node:node /app/.next
RUN mkdir -p /app/node_modules && chown node:node /app/node_modules

USER node

WORKDIR /app

COPY --chown=node:node package.json package-lock.json ./

RUN npm install

FROM node:alpine as production

ENV NODE_ENV production
ENV PORT 3000

WORKDIR /app
COPY --from=development --chown=root:root /app/node_modules ./node_modules
COPY . .

RUN mkdir -p /app/.next && chown node:node /app/.next

RUN npm run build

RUN npx next telemetry disable

USER node

CMD [ "npm", "start" ]
