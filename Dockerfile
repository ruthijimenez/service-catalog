# Dockerfile for server.js
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Define the command to run your app using CMD which defines your runtime
CMD ["node", "server.js"]