// Require all the things we need
const express = require('express');
const cors = require('cors');

// Configures our environment variables in the dotenv file
require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse .json

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});