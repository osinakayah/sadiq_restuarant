#FROM crowdlinker/nestbox
#
#WORKDIR /var/www/sadiq_restaurant
#RUN rm -Rvf /var/www/sadiq_restaurant/node_modules/
#COPY package.json yarn.lock ./
#COPY src /var/www/sadiq_restaurant/src
#RUN yarn --pure-lockfile
#
#COPY .eslintrc.js nest-cli.json tsconfig.json tsconfig.build.json ./
#
#COPY .env.docker /var/www/sadiq_restaurant/.env
#
#
#RUN yarn build
#
#CMD [ "yarn", "start:prod" ]


FROM node:18-alpine

WORKDIR /var/www/sadiq_restaurant

COPY package*.json ./

COPY . .

RUN rm -Rvf node_modules
RUN rm -Rvf nginx

RUN npm install

RUN npm run build

CMD [ "node", "dist/main.js" ]
