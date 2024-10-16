import React, { useState } from 'react';
import Navbar from '../components/shared/Navbar';
import useAuth from '../hooks/useAuth';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { user, setUser } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    // Register user and log them in
    const newUser = { name, email, password };
    setUser(newUser);
  };

  return (
    <>
      <Navbar />
      <div className="signup-page">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;