FROM node:12.13.1-alpine3.10

RUN mkdir -p /home/node/hive-fe/node_modules && chown -R node:node /home/node/hive-fe
RUN mkdir -p /home/node/hive-node/node_modules && chown -R node:node /home/node/hive-node

WORKDIR /home/node/hive-node
COPY hive-node/ ./
# COPY --chown=node:node . .
RUN npm install

WORKDIR /home/node/hive-fe
COPY hive-fe/ ./
# COPY --chown=node:node . .
RUN npm install && npm run build

WORKDIR /home/node
RUN cp hive-fe/dist/* hive-node/static

WORKDIR /home/node/hive-node

EXPOSE 3000

USER node

CMD [ "node", "app.js" ]
