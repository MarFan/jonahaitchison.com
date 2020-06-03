FROM node:current-slim as build-deps

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . ./

RUN npm run-script build

FROM nginx:1.17.9-alpine

COPY --from=build-deps /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]