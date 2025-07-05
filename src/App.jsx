import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import './assets/css/style.scss';
import Service from './components/frontend/Service';
import Login from './components/backend/Login';
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/backend/RequireAuth';
import Lease from './components/frontend/LeaseBriefBuddy';
import Auction from './components/frontend/AuctionBuddy';
import Offer from './components/frontend/OfferBuddy';
import axios from 'axios';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      setUsername(localStorage.getItem('username'));
      setRole(localStorage.getItem('role'));
    }
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post('http://127.0.0.0:8000/api/login', credentials);
      setIsLoggedIn(true);
      setUsername(credentials.username);
      setRole(response.data.role);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', credentials.username);
      localStorage.setItem('role', response.data.role);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    setUsername('');
    setRole('');
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/lease" element={<Lease />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/offer" element={<Offer />} />
          <Route
            path="/admin/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth isLoggedIn={isLoggedIn}>
                <Dashboard username={username} role={role} onLogout={handleLogout} />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;