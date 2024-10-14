const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080;

// Use middleware for parsing JSON
app.use(express.json());

// Setup routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
