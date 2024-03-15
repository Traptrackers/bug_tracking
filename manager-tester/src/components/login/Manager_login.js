import React, { useState } from 'react';
import './Manager_login.css';
import { Link } from 'react-router-dom';

const Manager_login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Please enter your email');
      return;
    }
    if (!password) {
      setPasswordError('Please enter your password');
      return;
    }
    // Perform login logic here
  };

  return (
    <div className="container">
      <h1 className="label">Manager Login</h1>
      <form className="login_form" onSubmit={handleLogin}>
        <div className="font">Email</div>
        <input
          autoComplete="off"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div id="email_error">{emailError}</div>}
        <div className="font font2">Password</div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div id="pass_error">{passwordError}</div>}
        <Link to='/Manager_home'><button type="submit">Login</button></Link>
      </form>
    </div>
  );
};

export default Manager_login;
