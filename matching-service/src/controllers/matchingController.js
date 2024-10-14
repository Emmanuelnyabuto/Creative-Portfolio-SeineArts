const Artist = require('../models/artist');
const matchArtists = require('../algorithms/matchAlgorithm');

const getMatches = async (req, res) => {
    try {
        const clientCriteria = req.body; // skill, availability, etc.
        const artists = await Artist.find();
        const matchedArtists = matchArtists(artists, clientCriteria);
        res.json(matchedArtists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getMatches };
