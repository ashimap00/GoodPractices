import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import './LoginSignup.css';

const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleShowSignup = (event) => {
    event.preventDefault();
    setShowLogin(false);
  };

  const handleShowLogin = (event) => {
    event.preventDefault();
    setShowLogin(true);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;

    fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
          navigate('/');
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => {
        setErrorMessage('An error occurred');
      });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const name = event.target.signupName.value;
    const email = event.target.signupEmail.value;
    const password = event.target.signupPassword.value;
    
    fetch('http://127.0.0.1:8000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, role: 'trainee' }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setShowLogin(true);
          setUser(data.user);
          navigate('/');
        } else {
          setErrorMessage(data.error);
        }
      })
      .catch((error) => {
        setErrorMessage('An error occurred');
      });
  };

  return (
    <div className="container">
      <div className="form-container">
        {showLogin ? (
          <>
            <h2 className="form-title">Welcome Back!</h2>
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <div className="input-group">
                <label htmlFor="loginEmail">Email</label>
                <input type="email" id="loginEmail" name="loginEmail" required />
              </div>
              <div className="input-group">
                <label htmlFor="loginPassword">Password</label>
                <input type="password" id="loginPassword" name="loginPassword" required />
              </div>
              <button type="submit" className="btn">Login</button>
              <p className="switch-form">
                Don't have an account? <a href="#" onClick={handleShowSignup}>Sign Up</a>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="form-title">Create Account</h2>
            <form className="signup-form" onSubmit={handleSignupSubmit}>
              <div className="input-group">
                <label htmlFor="signupName">Name</label>
                <input type="text" id="signupName" name="signupName" required />
              </div>
              <div className="input-group">
                <label htmlFor="signupEmail">Email</label>
                <input type="email" id="signupEmail" name="signupEmail" required />
              </div>
              <div className="input-group">
                <label htmlFor="signupPassword">Password</label>
                <input type="password" id="signupPassword" name="signupPassword" required />
              </div>
              <button type="submit" className="btn">Sign Up</button>
              <p className="switch-form">
                Already have an account? <a href="#" onClick={handleShowLogin}>Login</a>
              </p>
            </form>
          </>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginSignup;
