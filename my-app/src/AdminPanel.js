import React, { useState } from 'react';
import './AdminPanel.css';

function AdminPanel({ handleLogout, handleMenuClick }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const username = 'admin';
    const password = 'admin';
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="admin-panel">
      {!isLoggedIn ? (
        <div className="login-container">
          <h2>Admin Login</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="dashboard">
          <h2>Welcome Admin!</h2>
          <p>Manage your healthcare system with ease.</p>
          <div className="features">
            <div className="feature" onClick={() => handleMenuClick('doctors')}>
              <p>Manage Doctors</p>
            </div>
            <div className="feature" onClick={() => handleMenuClick('patients')}>
              <p>Manage Patients</p>
            </div>
          </div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
