// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route that sends "Hello World" as the response
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set the port the server will listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
