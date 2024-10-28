import { useEffect,useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function SignUp() {
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
                          <label>Email</label>
                          <input type="email" placeholder="Enter usrename" className="form-control" />
                          <i className="far fa-envelope"></i>
                      </div>

                      <div className="form-group">
                          <label>Password</label>
                          <input type="password" placeholder="Enter password" className="form-control" />
                          <i className="fas fa-lock"></i>
                      </div>

                      <div className="form-group">
                          <label>Confirm Password</label>
                          <input type="password" placeholder="Enter password" className="form-control" />
                          <i className="fas fa-lock"></i>
                      </div>

                      <div className="form-group">
                          <button type="submit" className="login-btn">Login</button>
                      </div>
                  </form>
              </div>
              <div className="sign-up">Already have an account ? <Link to="/">Sign In</Link></div>
          </div>
      </div>
      </>
    )
  }

  export default SignUp
