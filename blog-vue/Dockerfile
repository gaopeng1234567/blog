FROM node:14.8.0 as builder
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
COPY . .
RUN ls /app
RUN npm -v
RUN node -v
RUN npm config get registry
RUN cd /app
RUN npm i
RUN npm run build


FROM nginx:1.17
COPY --from=builder /app/nginx.conf /etc/nginx
COPY --from=builder /app/dist  /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
