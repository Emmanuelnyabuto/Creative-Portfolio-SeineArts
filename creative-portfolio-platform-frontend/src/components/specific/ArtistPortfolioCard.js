// src/components/specific/ArtistPortfolioCard.js
import React from 'react';

const ArtistPortfolioCard = ({ name, description }) => {
  return (
    <div className="artist-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ArtistPortfolioCard;
