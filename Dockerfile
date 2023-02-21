FROM node:16 as builder    
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . ./
RUN npm run build:dev


FROM nginx:latest
WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
COPY --from=builder /app/build/development .
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
