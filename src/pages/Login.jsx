import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyRound, User, Lock, AlertCircle } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Authenticate admin (admin/admin)
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admin');
    } else {
      setError('Invalid credentials. Use admin/admin');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-glass-card glass-panel">
        
        <div className="login-header-wrapper">
          <div className="login-icon-bubble">
            <KeyRound size={28} />
          </div>
          <h2>Workspace Login</h2>
          <p>Access the admin panel to update projects and view client inquiries.</p>
        </div>

        {error && (
          <div className="login-error-banner">
            <AlertCircle size={16} className="error-banner-icon" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-actual-form">
          <div className="form-group violet-focus">
            <label htmlFor="login-username">Username</label>
            <div className="input-icon-wrapper">
              <User size={15} className="input-icon" />
              <input 
                type="text" 
                id="login-username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="admin"
                required 
              />
            </div>
          </div>

          <div className="form-group cyan-focus">
            <label htmlFor="login-password">Password</label>
            <div className="input-icon-wrapper">
              <Lock size={15} className="input-icon" />
              <input 
                type="password" 
                id="login-password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••"
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn-primary-large login-submit-btn">
            Authenticate & Open Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
