FROM node:14-alpine as development

RUN apk add --no-cache git

RUN mkdir -p /app && chown node:node /app
RUN mkdir -p /app/.next && chown node:node /app/.next
RUN mkdir -p /app/node_modules && chown node:node /app/node_modules
WORKDIR /app
COPY --chown=node:node package.json package-lock.json ./

USER node
RUN npm install

FROM node:14-alpine as production

ENV NODE_ENV production
ENV SKIP_SSL true
ENV PORT 3000

WORKDIR /app
COPY --from=development --chown=root:root /app/node_modules ./node_modules
COPY . .

RUN mkdir -p /app/.next && chown node:node /app/.next

RUN npm run build

RUN npx next telemetry disable

RUN chown -R node:node /app/.next

USER node

CMD [ "npm", "start" ]
