const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define the /hello route
app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});

// Define the /goodbye route
app.get('/goodbye', (req, res) => {
  res.send('Goodbye, Express!');
});

// Define the /echo route
app.post('/echo', (req, res) => {
  res.json(req.body);
});

// Define the /greet route
app.get('/greet', (req, res) => {
  const name = req.query.name || 'World'; // Default to 'World' if no name is provided
  res.send(Hello, ${name}!);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});