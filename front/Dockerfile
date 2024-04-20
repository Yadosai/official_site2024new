FROM node:lts-alpine

RUN mkdir src

RUN apk update && \
    apk upgrade && \
    apk add --no-cache git

RUN yarn global add nuxt

COPY . .

RUN yarn install

RUN npm install
EXPOSE 3000

CMD ["yarn", "dev"]
