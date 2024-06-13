import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login-container">
        <div className="login-logo">Swag Labs</div>
        <div className="login-wrapper">
          <div className="login-wrapper-inner">
            <div className="login-button-container">
              <div className="login-box">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                        <input
                          className="form-input"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="error-message-container">
                        {error && <p className="error-msg">{error}</p>}
                    </div>
                    <button className="submit-btn" type="submit">Login</button>
                  </form>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
    </div>
  );
};

export default Login;
