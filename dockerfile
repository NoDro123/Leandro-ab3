FROM node:22

WORKDIR /usr/app

COPY ./ /usr/app

RUN npm install --legacy-peer-deps

RUN npm run build

CMD ["npm", "run", "start"]
