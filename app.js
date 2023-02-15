//**********Submits:***********//
//***Omer Boucris  314969817***//
//***Bar Bikovsky 315941633***//

// The code provided creates a Node.js server using the express framework,
//  and defines the server's behavior by importing and using other modules.

const express = require('express');
const http = require('http');
const path = require('path');
const { routeInit } = require('./routes/config_route');
const db = require('./data/mongoConnect');

const app = express();

// Define middleware to parse JSON data
app.use(express.json());

// Attach routes to the app object
routeInit(app);

// Create an HTTP server that uses the Express app
const server = http.createServer(app);

// Start the server listening on port 3001
const port = 3001;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
