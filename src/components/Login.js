import React, { useState } from 'react';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid username or password');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.id);
      setToken(data.token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="main-container">
      <div className="container1">
        <div className="sign-box">
          <p>Welcome back!👋</p>
          <h1>Login to your account</h1>
          <form onSubmit={handleSubmit} id="signup-form">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">LOGIN</button>
            {error && <p id="signup-message">{error}</p>}
          </form>
        </div>
        <p className="dacc">Don't have an account? <a href="#">Sign up</a> </p>
        <div className="div2">
          <div className="inside"></div>
          <div className="inside2"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
