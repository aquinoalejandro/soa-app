FROM node:19-alpine3.15 AS dev-deps
WORKDIR /app
COPY package.json package.json
RUN npm install --only=production

FROM node:19-alpine3.15 AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm install vite
RUN npm run build

FROM node:19-alpine3.15 AS production-deps
WORKDIR /app
COPY package.json package.json
RUN npm install --only=production

FROM node:19-alpine3.15 AS prod-deps
WORKDIR /app
COPY --from=production-deps /app/node_modules ./node_modules
COPY . .

FROM nginx:1.23.3 AS prod
EXPOSE 80

COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
