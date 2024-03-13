# service-catalog

!Microservice to display a product catalog!

## Setup
1. Download Node.js package from this link: https://nodejs.org/en/
2. Download MongoDB using this link: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
3. YouTube tutorial that helped: https://www.youtube.com/watch?v=MyIiM7z_j_Y
4. Download MongoDB Compass: https://www.mongodb.com/try/download/compass
5. In terminal: npm install express --save
6. In terminal: npm init -y
7. In terminal: npm install express mongoose body-parser
8. npm install cors
9. In terminal run: node server.js

9. View service catalog on local host: http://localhost:3000/services
10. View service catalog on MongoDB Compass: mongodb://localhost:27017/service-catalog


## Run through Minikube
* In terminal:  

11. minikube start
12. eval $(minikube docker-env)
12. docker build --rm -t service-catalog .
13. Open MongoDB Compass
14. Click Connect > New Window
15. In URI box: mongodb://localhost:27017/service-catalog
16. Click service-catalog database
17. Click services folder
18. Click ADD DATA 
19. Click import JSON or CSV file
20. Locate your services.json and select it
21. Verify the database is populated with the products
* Return to IDE
23. kubectl apply -f minikubeDeployment.yaml
24. kubectl get pods
25. kubectl get deployment service-catalog
26. kubectl expose deployment service-catalog --type=LoadBalancer --name=service-catalog-service 
27. kubectl get services service-catalog-service
28. (IN DIFFERENT TERMINAL) minikube tunnel
29. (BACK IN ORIGINAL TERMINAL) kubectl get services service-catalog-service
30. Make sure EXTERNAL-IP is no longer pending and says 127.0.0.1
31. curl http://127.0.0.1:3000/services
*If it does not redirect to page, type that url in your browser
32. docker run -p 3000:3000 service-catalog

## Run everything through Script
33. chmod +x run_microservice.sh
35. ./run_microservice.sh
