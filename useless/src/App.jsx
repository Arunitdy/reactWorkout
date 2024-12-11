import React, { useState } from 'react';
import Login from './Login/Login';
import Chef from './Chef/Chef';
import Count from './Count/Count';
import Profile from './Profile/Profile';
// import { Route, Routes } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Login setEmail={setEmail} setPassword={setPassword} />
      <Chef />
      <Count />
      <Profile email={email} password={password} />
    </div>
  );
}

export default App;
