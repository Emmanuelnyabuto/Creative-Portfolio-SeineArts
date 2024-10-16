// src/pages/ArtistPortfolioPage.js
import React from 'react';
import ArtistPortfolioCard from '../components/specific/ArtistPortfolioCard';

const ArtistPortfolioPage = () => {
  const portfolios = [
    { id: 1, name: 'Artist One', description: 'Portfolio 1 Description' },
    { id: 2, name: 'Artist Two', description: 'Portfolio 2 Description' },
  ];

  return (
    <div className="portfolio-page">
      <h2>Featured Artists</h2>
      <div className="portfolio-grid">
        {portfolios.map((portfolio) => (
          <ArtistPortfolioCard
            key={portfolio.id}
            name={portfolio.name}
            description={portfolio.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistPortfolioPage;
