FROM node:12-alpine
ARG NODE_ENV

WORKDIR /app

ENV NODE_ENV=${NODE_ENV}

COPY . /app

RUN yarn install --pure-lockfile \
  && yarn cache clean

CMD ["bin/run"]

