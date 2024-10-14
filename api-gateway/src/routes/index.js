const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const router = express.Router();

// Load environment variables
const userServiceURL = process.env.USER_SERVICE_URL;
const projectServiceURL = process.env.PROJECT_SERVICE_URL;
const paymentServiceURL = process.env.PAYMENT_SERVICE_URL;

// Proxy for User Management Service
router.use('/users', createProxyMiddleware({
    target: userServiceURL,
    changeOrigin: true,
    pathRewrite: {
        '^/api/users': '/',  // Remove "/api" from the request
    },
}));

// Proxy for Project Management Service
router.use('/projects', createProxyMiddleware({
    target: projectServiceURL,
    changeOrigin: true,
    pathRewrite: {
        '^/api/projects': '/',
    },
}));

// Proxy for Payment Service
router.use('/payments', createProxyMiddleware({
    target: paymentServiceURL,
    changeOrigin: true,
    pathRewrite: {
        '^/api/payments': '/',
    },
}));

module.exports = router;