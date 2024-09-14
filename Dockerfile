# syntax=docker/dockerfile:1

FROM node:22-alpine
WORKDIR /app
COPY . .
RUN echo "### current PORT value=${PORT}"
ENV PORT=${PORT}
RUN echo "### creating new port var=${PORT}"
RUN yarn install --production
CMD ["node", "src/server.js"]