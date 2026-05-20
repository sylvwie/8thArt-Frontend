import logoGif from "/src/assets/logos/logo.gif";
import hiddenIcon from "/src/assets/icons/hidden-icon.svg";

export function Login() {

  return (
    <>
      <div id="login-wrapper">

        <div id="login-page-container">

          <div id="logo-wrapper">
            <img src={logoGif} className="logo-gif" alt="Logo Gif" />

            <div className="status-logs">
              <span>STATUS: ONLINE</span>
              <span>UPTIME: 99.9%</span>
              <span>PING: 12ms</span>
            </div>
          </div>

          <div id="login-form-container">
            <span className="login-title">Log in</span>
            
            <div id="login-buttons">
              <span className="google-login-button"> <img className="google-logo"></img> Continue with Google</span>
              <span className="google-login-button"> <img className="facebook-logo"></img> Continue with Facebook</span>
              <span className="google-login-button"> <img className="apple-logo"></img> Continue with Apple</span>
            </div>

            <div className="login-form">
              <div className="login-form-header">
                <span>Login.exe</span>
              </div>

              <div className="login-form-body">
                <div id="username-input">
                  <span>Email address or username</span>
                  <input type="text" placeholder="Username" />
                </div>

                <div id="password-input">
                  <div id="password-text-wrap">
                    <span>Password</span>
                    <span><img id="hidden-icon" src={hiddenIcon} alt="Hidden Icon" /> Hidden</span>
                  </div>
                  <input type="password" placeholder="Password" />
                </div>
                  <span>Forget your password</span>
                  <span> <input type="checkbox" /> Remember me</span>

                  <div id="login-form-buttons">
                  <button id="login-submit-button">Login</button>
                  <button id="register-button">Don't have an account?</button>
                  </div>
              </div>
           </div>

          </div>

        </div>
      </div>
      </>
    )
}