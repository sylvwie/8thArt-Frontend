import { useState } from "react";
import logoGif from "/src/assets/logos/logo.gif";
import closedEye from "/src/assets/icons/closed-eye.svg";
import openEye from "/src/assets/icons/open-eye.svg";
import googleIcon from "/src/assets/icons/google.svg";
import facebookIcon from "/src/assets/icons/facebook.svg";
import appleIcon from "/src/assets/icons/apple.svg";
import { useNavigate } from "react-router-dom";
import squares1 from '/src/assets/icons/squares1.png';
import { StatusLog } from "../components/shared/StatusLog";


export function Login() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(old => !old);
    };

  return (
    <>
      <div id="login-wrapper">

        <div id="login-page-container">

          {/* Logo and status logs */}
          <div className="logo-wrapper">
            <img src={logoGif} className="logo-gif" alt="Logo Gif" />

            <StatusLog />

          </div>

          {/* login form */}
          <div id="login-form-container">
            <span className="login-title">Log in</span>

            {/* login with other accounts*/}
            <div className="login-suggestion-buttons">
              <button className="login-suggestion-button"> <img src={googleIcon} alt="Google Logo" /> Continue with Google</button>
              <button className="login-suggestion-button"> <img src={facebookIcon} alt="Facebook Logo" /> Continue with Facebook</button>
              <button className="login-suggestion-button"> <img src={appleIcon} alt="Apple Logo" /> Continue with Apple</button>
            </div>

            <div className="login-form">
              <div className="login-form-header">
                <img src={squares1} alt="squares1 icon" className="squares1" />
                <span className="auth-header-title">Login</span>
              </div>

              <div className="login-form-body">
                <div className="username-input">
                  <span className="form-label-title">Email address or username</span>
                  <input type="text" placeholder="Enter email or username" />
                </div>

                <div className="password-input">
                  <div className="password-text-wrap">
                    <span className="form-label-title">Password</span>

                    {/* password visibility toggle */}
                    <span className="eye-icon-text" onClick={toggleVisibility}>
                      <img
                        className="eye-icon"
                        src={isVisible ? openEye : closedEye}
                        alt="Eye Icon"
                      />
                      {isVisible ? "Visible" : "Hidden"}
                    </span>
                    {/* password visibility toggle */}

                  </div>
                  <input type={isVisible ? "text" : "password"} placeholder="Enter password" />
                </div>

                <span className="forgot-password">Forgot your password?</span>
                <span className="remember-me"> <input type="checkbox" /> Remember me</span>

                <div className="login-form-buttons">
                  <button className="login-submit-button">Login</button>
                  <button className="login-redirect-link-button" onClick={() => navigate("/register")}>
                    Don't have an account?
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

