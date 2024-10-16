// src/components/shared/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">SeineArts</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/portfolio">Find Talent</Link></li>
        <li><Link to="/projects">Find Work</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
