const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    artistId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: 'pending', enum: ['pending', 'in-progress', 'completed', 'cancelled'] },
    budget: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
