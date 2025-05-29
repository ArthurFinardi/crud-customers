# Stage 1: Build the Angular application
FROM node:18 as build
WORKDIR /app
COPY CRUD.front/package*.json ./
RUN npm install
COPY CRUD.front/ .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/crud-front /usr/share/nginx/html
COPY CRUD.front/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 