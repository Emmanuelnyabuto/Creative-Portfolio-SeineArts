import React, { useState } from 'react';
import Navbar from '../components/shared/Navbar';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    // Call login function with user data
    login({ email, password });
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        <h1>Log In</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;