FROM node:latest as builder
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . .
RUN npm run build


FROM nginx:latest
COPY nginx.conf /etc/nginx
COPY --from=builder /app/dist  /usr/share/nginx/html
