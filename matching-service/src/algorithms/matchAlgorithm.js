const matchArtists = (artists, clientCriteria) => {
    // Example matching algorithm based on skills and availability
    return artists.filter(artist => {
        return artist.skills.includes(clientCriteria.skill) &&
               artist.availability === clientCriteria.availability;
    });
};

module.exports = matchArtists;
