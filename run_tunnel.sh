#!/bin/bash

# Start Minikube
echo "Starting Minikube..."
minikube start

# Minikube Tunnel
echo "Deploying Minikube Tunnel..."
minikube tunnel
