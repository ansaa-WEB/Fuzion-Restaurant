import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import './loginpage.css';

const RESTAURANT_IMAGE = "/images/img_1517248135467-4c7edcad34c4.jpg";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Form submit handler (Aap yahan apni authentication logic ya navigation laga sakte hain)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert("Successfully Signed In!");
      navigate('/'); // Login ke baad home page par redirect karne ke liye
    } else {
      alert("Account Created Successfully!");
      setIsLogin(true); // Register hone ke baad login form par le aaye
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-wrapper">
        {/* Left Side: Image & Branding */}
        <div className="login-left" style={{ backgroundImage: `url(${RESTAURANT_IMAGE})` }}>
          <div className="login-overlay">
            <div className="login-brand-info">
              <Link to="/" className="login-logo">Fuzion</Link>
              <h3>Elevated Dining Experience</h3>
              <p>Login to manage your reservations, view exclusive menu items, and enjoy member benefits.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Stylish Form */}
        <div className="login-right">
          <div className="login-form-box">
            <div className="form-box-header">
              <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
              <p>{isLogin ? 'Sign in to continue your journey with us.' : 'Sign up to join our culinary world.'}</p>
            </div>

            <form className="stylish-form" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="stylish-input-group">
                  <FaUser className="input-icon" />
                  <input type="text" placeholder="Full Name" required />
                </div>
              )}

              <div className="stylish-input-group">
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Email Address" required />
              </div>

              <div className="stylish-input-group">
                <FaLock className="input-icon" />
                <input type="password" placeholder="Password" required />
              </div>

              {isLogin && (
                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent!'); }} className="forgot-pass">Forgot Password?</a>
                </div>
              )}

              <button type="submit" className="stylish-submit-btn">
                {isLogin ? 'Sign In' : 'Register Now'}
                <FaArrowRight className="btn-arrow" />
              </button>
            </form>

            <div className="login-switch-footer">
              <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <span 
                  onClick={() => setIsLogin(!isLogin)} 
                  style={{ color: '#d4af37', cursor: 'pointer', fontWeight: 'bold', marginLeft: '5px' }}
                >
                  {isLogin ? ' Sign Up' : ' Sign In'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}