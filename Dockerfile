FROM node:18-alpine

WORKDIR /app

COPY --chown=node:node . /app

RUN yarn

USER node

EXPOSE 3000

CMD [ "node", "/app/server" ]