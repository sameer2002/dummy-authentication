// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        <Route path="/login" element={token ? <Navigate to="/profile" /> : <Login setToken={setToken} />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        
      </Routes>
    </Router>
  );
};

export default App;
