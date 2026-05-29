import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoGif from "/src/assets/logos/logo.gif";
import closedEye from "/src/assets/icons/closed-eye.svg";
import openEye from "/src/assets/icons/open-eye.svg";
import googleIcon from "/src/assets/icons/google.svg";
import facebookIcon from "/src/assets/icons/facebook.svg";
import appleIcon from "/src/assets/icons/apple.svg";
import squares1 from '/src/assets/icons/squares1.png';
import { StatusLog } from "../components/shared/StatusLog";

export function Register() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(old => !old);
    };

  return (
    <>
      <div id="register-wrapper">

        <div id="register-page-container">

          <div className="logo-wrapper">
            <img src={logoGif} className="logo-gif" alt="Logo Gif" />

            <StatusLog />
          </div>

          <div id="register-form-container">
            <span className="register-title">Create an Account</span>

            <div className="register-form">
              <div className="register-form-header">
                <img src={squares1} alt="squares1 icon" className="squares1" />
                <span className="auth-header-title">Register</span>
              </div>

              <div className="register-form-body">
                <div className="username-input">
                  <span className="form-label-title">Username</span>
                  <input type="text" placeholder="Enter username" />
                </div>

                <div className="email-input">
                  <span className="form-label-title">Email address</span>
                  <input type="text" placeholder="Enter email" />
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

				<span className="psw-input-subtext">Use 8 or more characters with a mix of letters, numbers & symbols</span>

                <div className="register-form-buttons">
                  <button className="register-submit-button">Create Account</button>
                  <button className="register-redirect-link-button" onClick={() => navigate("/login")}>
                    Already have an account? <span id="register-link">Login</span>
                  </button>
                </div>
              </div>
            </div>

			<div id="continue-with-container">
				<span className="suggestions-title">Or Continue with</span>
				<div className="register-suggestion-buttons">
					<button className="register-suggestion-button"> <img src={googleIcon} alt="Google Logo" /> Google</button>
					<button className="register-suggestion-button"> <img src={facebookIcon} alt="Facebook Logo" /> Facebook</button>
					<button className="register-suggestion-button"> <img src={appleIcon} alt="Apple Logo" /> Apple</button>
				</div>
			</div>

          </div>

        </div>
      </div>
    </>
  )
}

