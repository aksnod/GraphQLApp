FROM node:alpine
WORKDIR /user/src/graphapp
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]