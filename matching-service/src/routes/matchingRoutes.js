const express = require('express');
const { getMatches } = require('../controllers/matchingController');
const router = express.Router();

router.post('/', getMatches);

module.exports = router;
