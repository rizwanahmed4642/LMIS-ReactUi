import { useEffect, useState } from "react";
import "../App.css";

import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Token")) {
        navigate("/dashboard");
    } else {
        navigate("/");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  //#region  Login Code
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username != "" && password != "") {
        setIsLoading(true)
        const formData = {
            username,
            password
        }

        await axios.post(import.meta.env.REACT_APP_BASE_URL + "Authentication/Authenticate",formData)
        .then(res => {
            setIsLoading(false)
            toast.success("Login Successful!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });

              localStorage.setItem("Token",res.data.data.token);
              navigate("/dashboard");
            console.log(res);
        })
        .catch(err => {
            setIsLoading(false)
            console.log(err);
        })
    } else {
        toast.warning("Fill the required fields to login.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
    }
  }
  //#endregion

  return (
    <>
          <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <ToastContainer />
      {isLoading && <div id="preloader"></div>}

      <div className="login-page-wrap">
        <div className="login-page-content">
          <div className="login-box">
            <div className="item-logo">
              <img src="src/assets/img/logo2.png" alt="logo" />
            </div>
            <form action="index.html" className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter usrename"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <i className="far fa-envelope"></i>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="Enter password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="fas fa-lock"></i>
              </div>
              <div className="form-group d-flex align-items-center justify-content-between">
                <div className="form-check" style={{ paddingLeft: "0" }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember-me"
                  />
                  <label htmlFor="remember-me" className="form-check-label">
                    <small>Remember Me</small>
                  </label>
                </div>
                <a href="#" className="forgot-btn">
                  <small>Forgot Password?</small>
                </a>
              </div>
              <div className="form-group">
                <button type="submit" className="login-btn">
                  Login
                </button>
              </div>
            </form>
            <div className="login-social">
              <p>or sign in with</p>
              <ul>
                <li>
                  <a href="#" className="bg-fb">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-gplus">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-git">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sign-up">
            Don't have an account ? <Link to="/signup">Signup now!</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
