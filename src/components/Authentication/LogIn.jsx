
import React, { useState } from 'react';

const LogIn = ({ onLogIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
   
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => onLogIn(data));
  };

  return (
    <div className="log-in">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="Password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
