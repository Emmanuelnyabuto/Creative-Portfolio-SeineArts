const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming the users are stored in another service
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ['design', 'voiceover', 'photography', 'videography'],
        required: true
    },
    files: [{
        fileUrl: String,
        fileType: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
