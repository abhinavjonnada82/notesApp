# FROM node: 8.9-alpine
# COPY . .
# RUN npm install
# RUN npm run build --production
# RUN npm install -g serve
# CMD serve -s build
# EXPOSE 5000



FROM node:6
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/spp
RUN npm cache clean
RUN npm install
COPY . /usr/src/app
EXPOSE 5000
CMD ["npm", "start"]