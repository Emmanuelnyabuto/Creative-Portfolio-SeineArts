// src/hooks/useAuth.js
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { user, setUser } = context;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, [setUser]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return { user, isAuthenticated, login, logout };
};

export default useAuth;