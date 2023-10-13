import React, { useState } from 'react';
import './SignIn.css';
import {GoogleLogin} from "@react-oauth/google";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const SignIn = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleGoogleSignInSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    setIsAuthenticated(true);
  };
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <p className='p'>Sign in to your account</p>
      <div className="social-sign-in">
        <div className="google">
          <GoogleLogin
           onSuccess={handleGoogleSignInSuccess}
           onError={()=>{
            console.log("Login Failed")
           }}
           />
        </div>
        <div className="apple">
          <img src="data:image/png;base64,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" alt="Apple" />
          <p>Sign in with Apple</p>
        </div>
      </div>
      <div className='formi'>
      <form className='form'>
        <p>Email Address</p>
        <input type="email" placeholder="Email Address" />
        <p>Password</p>
        <input type="password" placeholder="Password" />
        <p className='p2'>Forgot password ?</p>
        <button>Sign In</button>
      </form>
      </div>
      <p>Don't have an account? <span class="blue-text">Register Here</span></p>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : null} 
          />
        </Routes>
    </div>
  );
};

export default SignIn;