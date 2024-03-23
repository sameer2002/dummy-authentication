// App.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    
      <Routes>
        <Route path="/" element={token ? <Navigate to="/profile" /> : <Login setToken={setToken} />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/" />} />
        
      </Routes>
    
  );
};

export default App;
