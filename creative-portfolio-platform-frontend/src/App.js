// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistPortfolioPage from './pages/ArtistPortfolioPage';
import ProjectManagementPage from './pages/ProjectManagementPage';
import PaymentPage from './pages/PaymentPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/shared/Navbar';
import Footer from './components/layout/Footer';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<ArtistPortfolioPage />} />
            <Route path="/projects" element={<ProjectManagementPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;