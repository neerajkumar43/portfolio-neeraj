import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admin');
    } else {
      setError('Invalid credentials. Try admin/admin');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Admin Login</h2>
        <p>Enter your credentials to access the dashboard.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="admin"
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="admin"
              required 
            />
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" className="btn-primary-large">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
