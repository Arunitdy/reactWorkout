import React, { useState } from "react";
import './login.css';

const Login = ({ setEmail, setPassword }) => { // Destructure props here

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission, such as sending the login request to an API.
   // console.log("Login submitted with", { email, password });
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
