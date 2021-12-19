FROM node:16-alpine

#ENV CI=true : allows create-react-app to run inside docker container
ENV CI=true 

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]