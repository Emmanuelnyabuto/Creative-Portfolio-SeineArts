// src/pages/HomePage.js
import React from 'react';
import Button from '../components/shared/Button';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Seine Arts</h1>
      <p>Find the best creatives or showcase your talent.</p>
      <Button label="Get Started" onClick={() => alert('Getting Started!')} />
    </div>
  );
};

export default HomePage;
