FROM node:14.17.5-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build
FROM nginx:latest
COPY --from=build /usr/src/app/dist/angular-guitars /usr/share/nginx/html
EXPOSE 80