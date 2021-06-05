FROM node:12-alpine

WORKDIR /app

COPY package.json ./package.json
RUN npm i

COPY . .
RUN npm run build

ENV PORT=3000
CMD ["node", "server.js"]