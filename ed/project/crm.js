const express = require('express');
const app = express();
app.use(express.json());

let customers = [];

// GET all customers
app.get('/customers', (req, res) => {
    res.json(customers);
});

// GET a single customer by ID
app.get('/customers/:id', (req, res) => {
    const customerId = req.params.id;
    const customer = customers.find(c => c.id === customerId);
    if (!customer) {
        res.status(404).json({ message: 'Customer not found' });
    } else {
        res.json(customer);
    }
});

// POST create a new customer
app.post('/customers', (req, res) => {
    const newCustomer = req.body;
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});

// PUT update a customer by ID
app.put('/customers/:id', (req, res) => {
    const customerId = req.params.id;
    const updatedCustomer = req.body;
    customers = customers.map(c => (c.id === customerId ? updatedCustomer : c));
    res.json(updatedCustomer);
});

// DELETE a customer by ID
app.delete('/customers/:id', (req, res) => {
    const customerId = req.params.id;
    customers = customers.filter(c => c.id !== customerId);
    res.json({ message: 'Customer deleted' });
});

app.listen(3000, () => {
    console.log('CRM API server is running on port 3000');
});
