import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/artist-portfolio" component={ArtistPortfolioPage} />
        <Route path="/projects" component={ProjectManagementPage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;