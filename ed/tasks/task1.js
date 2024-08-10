const express = require('express');
const app = express();
const port = 3000;

// Define the /hello route
app.get('/hello', (req, res) => {
  res.send("Hello, Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});