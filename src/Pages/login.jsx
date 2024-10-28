import { useEffect,useState } from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

function Login() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000);

        return () => clearTimeout(timer);
    },[]);

    return (
      <>
      { isLoading && <div id="preloader"></div> }

      <div className="login-page-wrap">
          <div className="login-page-content">
              <div className="login-box">
                  <div className="item-logo">
                      <img src="src/assets/img/logo2.png" alt="logo" />
                  </div>
                  <form action="index.html" className="login-form">
                      <div className="form-group">
                          <label>Username</label>
                          <input type="text" placeholder="Enter usrename" className="form-control" />
                          <i className="far fa-envelope"></i>
                      </div>
                      <div className="form-group">
                          <label>Password</label>
                          <input type="text" placeholder="Enter password" className="form-control" />
                          <i className="fas fa-lock"></i>
                      </div>
                      <div className="form-group d-flex align-items-center justify-content-between">
                          <div className="form-check" style={{paddingLeft:"0"}}>
                              <input type="checkbox" className="form-check-input" id="remember-me" />
                              <label htmlFor="remember-me" className="form-check-label"><small>Remember Me</small></label>
                          </div>
                          <a href="#" className="forgot-btn"><small>Forgot Password?</small></a>
                      </div>
                      <div className="form-group">
                          <button type="submit" className="login-btn">Login</button>
                      </div>
                  </form>
                  <div className="login-social">
                      <p>or sign in with</p>
                      <ul>
                          <li><a href="#" className="bg-fb"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#" className="bg-twitter"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="#" className="bg-gplus"><i className="fab fa-google-plus-g"></i></a></li>
                          <li><a href="#" className="bg-git"><i className="fab fa-github"></i></a></li>
                      </ul>
                  </div>
              </div>
              <div className="sign-up">Don't have an account ? <Link to="/signup">Signup now!</Link></div>
          </div>
      </div>
      </>
    )
  }

  export default Login
