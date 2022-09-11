FROM crowdlinker/nestbox

WORKDIR /var/www/sadiq_restaurant

COPY package.json yarn.lock ./
RUN yarn --pure-lockfile

COPY .eslintrc.js nest-cli.json tsconfig.json tsconfig.build.json ./

COPY .env.docker /var/www/sadiq_restaurant/.env


CMD [ "yarn", "start:dev" ]
