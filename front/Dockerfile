FROM node:lts-alpine

RUN mkdir src

RUN apk update && \
    apk upgrade && \
    apk add --no-cache git


COPY . .


RUN npm install
EXPOSE 3000

CMD ["npm", "run","dev"]
