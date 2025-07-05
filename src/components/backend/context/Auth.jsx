import React, { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initialize user info from localStorage
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login method (for demonstration)
  // In a real app, you'd fetch from an API, validate credentials, etc.
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('userInfo', JSON.stringify(userData));
  };

  // Logout method
  const logout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
  };

  // Provide the user object and auth methods to children
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
