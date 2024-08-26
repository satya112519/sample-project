// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route that sends "Hello World" as the response
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set the port the server will listen on
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});

