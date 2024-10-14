const Portfolio = require('../models/portfolioModel');
const AWS = require('aws-sdk');
const multer = require('multer');
const path = require('path');

// AWS S3 configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1' // Adjust as needed
});

// Multer configuration for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage }).array('files', 5); // Limit to 5 files at once

// Create a new portfolio
const createPortfolio = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: 'File upload error', error: err });
        }

        const { title, description, category } = req.body;

        try {
            const portfolioFiles = [];

            for (const file of req.files) {
                const params = {
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: `portfolios/${Date.now()}_${path.basename(file.originalname)}`,
                    Body: file.buffer,
                    ContentType: file.mimetype,
                    ACL: 'public-read',
                };

                const data = await s3.upload(params).promise();
                portfolioFiles.push({ fileUrl: data.Location, fileType: file.mimetype });
            }

            const newPortfolio = new Portfolio({
                artist: req.user.id, // Assuming you have the user id from authentication middleware
                title,
                description,
                category,
                files: portfolioFiles,
            });

            await newPortfolio.save();

            res.status(201).json(newPortfolio);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    });
};

// Get an artist's portfolio
const getPortfolioByArtist = async (req, res) => {
    try {
        const portfolio = await Portfolio.find({ artist: req.params.artistId });
        if (!portfolio) {
            return res.status(404).json({ message: 'Portfolio not found' });
        }
        res.status(200).json(portfolio);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Search portfolios by category
const searchPortfolios = async (req, res) => {
    const { category } = req.query;

    try {
        const portfolios = await Portfolio.find({ category });
        res.status(200).json(portfolios);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { createPortfolio, getPortfolioByArtist, searchPortfolios };
