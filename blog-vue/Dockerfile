FROM node:latest as builder
WORKDIR /app
Run npm install -g cnpm --registry=https://registry.npm.taobao.org
COPY package.json /app/
RUN npm install
COPY . .
RUN npm run build


FROM nginx:latest
COPY nginx.conf /etc/nginx
COPY --from=builder /app/dist  /usr/share/nginx/html
