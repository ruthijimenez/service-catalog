# service-catalog

Microservice to display a product catalog

## Setup
Download Node.js package from this link: https://nodejs.org/en/
Download MongoDB using this link: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
YouTube tutorial that helped: https://www.youtube.com/watch?v=MyIiM7z_j_Y
Download MongoDB Compass: https://www.mongodb.com/try/download/compass
In terminal: npm install express --save
In terminal: npm init -y
In terminal: npm install express mongoose body-parser
In terminal run: node server.js

View service catalog on local host: http://localhost:3000/services
View service catalog on MongoDB Compass: mongodb://localhost:27017/service-catalog

## Build Docker Image
In terminal: docker build --rm -t service-catalog .
In terminal: docker run -p 3000:3000 service-catalog
