import React, { useState, useEffect } from "react";

function Messaging() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <div id="preloader"></div>}

      <div className="dashboard-content-one">
        <div className="breadcrumbs-area">
          <h3>Messaging</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Compose Message</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Write New Message</h3>
                  </div>
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ...
                    </a>

                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-times text-orange-red"></i>Close
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs text-dark-pastel-green"></i>
                        Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-redo-alt text-orange-peel"></i>
                        Refresh
                      </a>
                    </div>
                  </div>
                </div>
                <form className="new-added-form">
                  <div className="row">
                    <div className="col-12 form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 form-group">
                      <label>Recipient</label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 form-group">
                      <label>Message</label>
                      <textarea
                        className="textarea form-control"
                        name="message"
                        id="form-message"
                        cols="10"
                        rows="9"
                      ></textarea>
                    </div>
                    <div className="col-12 form-group mg-t-8">
                      <button
                        type="submit"
                        className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                      >
                        Save
                      </button>
                      <button
                        type="reset"
                        className="btn-fill-lg bg-blue-dark btn-hover-yellow"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card message-box-wrap height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Successful Message</h3>
                  </div>
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ...
                    </a>

                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-times text-orange-red"></i>Close
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs text-dark-pastel-green"></i>
                        Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-redo-alt text-orange-peel"></i>
                        Refresh
                      </a>
                    </div>
                  </div>
                </div>
                <div className="message-success-box">
                  <div className="item-content">
                    <div className="item-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <h3 className="item-title">Successfully Message Sent</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="card message-box-wrap height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Error Message</h3>
                  </div>
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ...
                    </a>

                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-times text-orange-red"></i>Close
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs text-dark-pastel-green"></i>
                        Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-redo-alt text-orange-peel"></i>
                        Refresh
                      </a>
                    </div>
                  </div>
                </div>
                <div className="message-error-box">
                  <div className="item-content">
                    <div className="item-icon">
                      <i className="fas fa-exclamation-circle"></i>
                    </div>
                    <h3 className="item-title">Some Field Requierd Here</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-wrap-layout1">
          <div className="copyright">
            © Copyrights <a href="#">akkhor</a> 2019. All rights reserved.
            Designed by
            <a href="#">PsdBosS</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Messaging;
