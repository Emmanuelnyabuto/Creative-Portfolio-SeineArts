const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Create a new project
router.post('/', projectController.createProject);

// Get a specific project
router.get('/:id', projectController.getProject);

// Update project status
router.put('/:id/status', projectController.updateProjectStatus);

module.exports = router;
