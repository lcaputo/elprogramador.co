FROM node:14.15.3-buster-slim
# ------------------------------------
ARG BUILD_DEVELOPMENT
# if --build-arg BUILD_DEVELOPMENT=1, set NODE_ENV to 'development' or set to null otherwise.
ENV NODE_ENV=${BUILD_DEVELOPMENT:+development}
# if NODE_ENV is null, set it to 'production' (or leave as is otherwise).
ENV NODE_ENV=${NODE_ENV:-production}
# ------------------------------------
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# INSTALL YARN
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN sudo apt update && sudo apt install yarn


COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE ${APP_PORT}

CMD [ "sh", "-c", "yarn run start" ]