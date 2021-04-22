FROM node:14.15.3-buster-slim
# ------------------------------------

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN apt update && apt install -y gnupg2
RUN apt isntall -y curl

# INSTALL YARN
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install yarn


COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE ${APP_PORT}

CMD [ "sh", "-c", "yarn start" ]