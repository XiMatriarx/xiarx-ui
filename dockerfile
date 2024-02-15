FROM node:20-alpine AS xiarx-client-build

ARG PORT=80

WORKDIR /app

COPY . .

RUN npm install --omit=dev
RUN npm run build

FROM node:20-alpine AS xiarx-client

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY --from=xiarx-client-build /app/node_modules node_modules
COPY --from=xiarx-client-build /app/lib .

EXPOSE $PORT

CMD ["node", "index.js"]
