const express = require('express');
const dotenv = require('dotenv');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/payment', paymentRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Payment Service running on port ${PORT}`);
});
