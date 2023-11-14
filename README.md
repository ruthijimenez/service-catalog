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


## Run through Minikube
In terminal: 
minikube start
eval $(minikube docker-env)
docker build --rm -t service-catalog .
Open MongoDB Compass
Click Connect > New Window
In URI box: mongodb://localhost:27017/service-catalog
Click service-catalog database
Click services folder
Click ADD DATA 
Click import JSON or CSV file
Locate your services.json and select it
Verify the database is populated with the products
Return to IDE
kubectl apply -f minikubeDeployment.yaml
kubectl get pods
kubectl get deployment service-catalog
kubectl expose deployment service-catalog --type=LoadBalancer --name=service-catalog-service 
kubectl get services service-catalog-service
(IN DIFFERENT TERMINAL) minikube tunnel
(BACK IN ORIGINAL TERMINAL) kubectl get services service-catalog-service
Make sure EXTERNAL-IP is no longer pending and says 127.0.0.1
curl http://127.0.0.1:3000/services
If it does not redirect to page, type that url in your browser
docker run -p 3000:3000 service-catalog

## Run everything through Script
chmod +x run_microservice.sh
./run_microservice.sh
