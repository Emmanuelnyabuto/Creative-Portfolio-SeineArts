const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    skills: { type: [String], required: true },
    availability: { type: String, required: true }, // Available, Busy, etc.
    rating: { type: Number, default: 0 }
});

module.exports = mongoose.model('Artist', artistSchema);
