const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const portfolioRoutes = require('./routes/portfolioRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('MongoDB connection error:', error));

// Routes
app.use('/api/portfolios', portfolioRoutes);

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Artist portfolio service running on port ${PORT}`);
});
