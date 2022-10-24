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

// In the event the app crashes:
process.once('SIGUSR2', function () {
  process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', function () {
  // This is only called on ctrl+c, not restart
  process.kill(process.pid, 'SIGINT');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});