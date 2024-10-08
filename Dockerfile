# syntax=docker/dockerfile:1

FROM node:22-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/server.js"]