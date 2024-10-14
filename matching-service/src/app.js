const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const matchingRoutes = require('./routes/matchingRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/matching', matchingRoutes);

// Set the strictQuery option
mongoose.set('strictQuery', true); // or false, depending on your preference

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB connected');
});

// Start server
app.listen(PORT, () => {
    console.log(`Matching Service running on port ${PORT}`);
});
