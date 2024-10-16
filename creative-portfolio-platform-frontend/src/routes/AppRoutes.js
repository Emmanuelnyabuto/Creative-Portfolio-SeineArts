import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ArtistPortfolioPage from '../pages/ArtistPortfolioPage';
import ProjectManagementPage from '../pages/ProjectManagementPage';
import PaymentPage from '../pages/PaymentPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Navbar from '../components/shared/Navbar';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artist-portfolio" element={<ArtistPortfolioPage />} />
        <Route path="/projects" element={<ProjectManagementPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;