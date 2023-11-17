#!/bin/bash

# # --- COMMENTED OUT THE LOCAL SETUP ---
# # ------------ From here --------------

# echo "Setting up service-catalog microservice locally..."

# # Install Node.js dependencies
# echo "Installing Node.js dependencies..."
# npm install express mongoose body-parser

# # Run server.js locally
# echo "Running server.js locally..."
# node server.js &

# # -------------- To here ----------------

# --- Minikube Deployment ---

echo "Deploying service-catalog microservice on Minikube..."

# Setting Docker to use Minikube's Docker daemon
echo "Setting Docker to use Minikube's Docker daemon..."
eval $(minikube -p minikube docker-env)

# Build Docker image
echo "Building Docker image for service-catalog..."
docker build --rm -t service-catalog .

# Apply Kubernetes deployment
echo "Applying Kubernetes deployment..."
kubectl apply -f minikubeDeployment.yaml

# Wait for the deployment to be ready
echo "Waiting for deployment to be ready..."
kubectl rollout status deployment/service-catalog

# Expose the deployment
echo "Exposing the service via LoadBalancer..."
kubectl expose deployment service-catalog --type=LoadBalancer --name=service-catalog-service

# Fetching service details
echo "Fetching service details..."
kubectl get services service-catalog-service

# Notify user to check external IP
echo "Check the EXTERNAL-IP in the output of the above command. It should not be 'pending'."
echo "Once the EXTERNAL-IP is available (like 127.0.0.1), you can access the service at http://127.0.0.1:3000/services"
