const express = require('express');
const { createPortfolio, getPortfolioByArtist, searchPortfolios } = require('../controllers/portfolioController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

// Protected routes
router.post('/create', authMiddleware, createPortfolio);

// Public routes
router.get('/artist/:artistId', getPortfolioByArtist);
router.get('/search', searchPortfolios);

module.exports = router;
