import React, { useState, useEffect } from "react";

function Alart() {
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
          <h3>UI Elements</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>UI Elements</li>
            <li>Notification</li>
          </ul>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1 mg-b-25">
              <div className="item-title">
                <h3>Default Alert</h3>
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
                    <i className="fas fa-cogs text-dark-pastel-green"></i>Edit
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-redo-alt text-orange-peel"></i>Refresh
                  </a>
                </div>
              </div>
            </div>
            <div className="ui-alart-box">
              <div className="default-alart">
                <div className="alert alert-primary" role="alert">
                  This is a primary alert—check it out!
                </div>
                <div className="alert alert-success" role="alert">
                  This is a success alert—check it out!
                </div>
                <div className="alert alert-danger" role="alert">
                  This is a danger alert—check it out!
                </div>
                <div className="alert alert-warning" role="alert">
                  This is a warning alert—check it out!
                </div>
                <div className="alert alert-info" role="alert">
                  This is a info alert—check it out!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1 mg-b-25">
              <div className="item-title">
                <h3>Dismissing Alerts</h3>
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
                    <i className="fas fa-cogs text-dark-pastel-green"></i>Edit
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-redo-alt text-orange-peel"></i>Refresh
                  </a>
                </div>
              </div>
            </div>
            <div className="ui-alart-box">
              <div className="dismiss-alart">
                <div
                  className="alert alert-primary alert-dismissible fade show"
                  role="alert"
                >
                  This is a primary alert—check it out!
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  This is a success alert—check it out!
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  This is a danger alert—check it out!
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  This is a warning alert—check it out!
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  className="alert alert-info alert-dismissible fade show"
                  role="alert"
                >
                  This is a info alert—check it out!
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1 mg-b-25">
              <div className="item-title">
                <h3>Colored Alerts With Icons</h3>
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
                    <i className="fas fa-cogs text-dark-pastel-green"></i>Edit
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-redo-alt text-orange-peel"></i>Refresh
                  </a>
                </div>
              </div>
            </div>
            <div className="ui-alart-box">
              <div className="icon-color-alart">
                <div className="alert icon-alart bg-light-green2" role="alert">
                  <i className="far fa-hand-point-right bg-light-green3"></i>
                  Well done! You successfully read this important alert message.
                </div>
                <div className="alert icon-alart bg-fb2" role="alert">
                  <i className="fas fa-exclamation bg-fb3"></i>
                  Heads up! This alert needs your attention, but it's not super
                  important.
                </div>
                <div className="alert icon-alart bg-yellow2" role="alert">
                  <i className="fas fa-exclamation-triangle bg-yellow3"></i>
                  Attention! Learning day desirous informed expenses material
                  returned six the.
                </div>
                <div className="alert icon-alart bg-pink2" role="alert">
                  <i className="fas fa-times bg-pink3"></i>
                  Attention! Learning day desirous informed expenses material
                  returned six the.
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-wrap-layout1">
          <div className="copyright">
            © Copyrights <a href="#">akkhor</a> 2019. All rights reserved.
            Designed by <a href="#">PsdBosS</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Alart;
