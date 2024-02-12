// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Create an instance of the express application
const app = express();

// Set up middleware to parse incoming requests
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://host.docker.internal:27017/service-catalog')
     .then(() => console.log('Connected to MongoDB'))
     .catch(err => console.error('Could not connect to MongoDB', err));


// Define a schema for the services collection
const serviceSchema = new mongoose.Schema({
    
    name: String,
    description: String,
    price: Number,
    image: String
});

// Define a model for the services collection
const Service = mongoose.model('Service', serviceSchema);

// Define routes for the service-catalog microservice
app.get('/services', async (req, res) => {
    // Return a list of available services
    const services = await Service.find();
    console.log(services);
    res.send(services);
});

app.post('/services', async (req, res) => {
    // Add a new service to the catalog
    const service = new Service({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    });
    await service.save();
    res.send(service);
});

app.get('/services/:id', async (req, res) => {
    // Return details for a specific service
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).send('Service not found');
    res.send(service);
});

app.put('/services/:id', async (req, res) => {
    // Update details for a specific service
    const service = await Service.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    }, { new: true });
    if (!service) return res.status(404).send('Service not found');
    res.send(service);
});

app.delete('/services/:id', async (req, res) => {
    // Remove a service from the catalog
    const service = await Service.findByIdAndRemove(req.params.id);
    if (!service) return res.status(404).send('Service not found');
    res.send(service);
});

// Start the server
app.listen(3000, () => {
    console.log('Service catalog microservice listening on port 3000');
});
