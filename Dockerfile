FROM node:12.2.0-alpine as build

#also say
WORKDIR /app

#copy the react app to container
COPY . /app/

# prepare the container for building react
RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm run build
RUN rm /app/build/static/js/*.map

# preapre ngnix
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d


# fire up ngnix
EXPOSE 80
CMD ["nginx","-g","daemon off;"]