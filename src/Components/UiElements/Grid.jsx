import React, { useState, useEffect } from "react";

function Grid() {
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
            <li>Grid</li>
          </ul>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1 mg-b-25">
              <div className="item-title">
                <h3>Base on Bootstrap System</h3>
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
            <div className="row">
              <div className="col-lg-12">
                <div className="ui-grid-box">Col-lg-12</div>
              </div>
              <div className="col-lg-6">
                <div className="ui-grid-box">Col-lg-6</div>
              </div>
              <div className="col-lg-6">
                <div className="ui-grid-box">Col-lg-6</div>
              </div>
              <div className="col-lg-4">
                <div className="ui-grid-box">Col-lg-4</div>
              </div>
              <div className="col-lg-4">
                <div className="ui-grid-box">Col-lg-4</div>
              </div>
              <div className="col-lg-4">
                <div className="ui-grid-box">Col-lg-4</div>
              </div>
              <div className="col-lg-3">
                <div className="ui-grid-box">Col-lg-3</div>
              </div>
              <div className="col-lg-3">
                <div className="ui-grid-box">Col-lg-3</div>
              </div>
              <div className="col-lg-3">
                <div className="ui-grid-box">Col-lg-3</div>
              </div>
              <div className="col-lg-3">
                <div className="ui-grid-box">Col-lg-3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1 mg-b-25">
              <div className="item-title">
                <h3>Mobile, Tablet & Destop System</h3>
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
            <div className="row">
              <div className="col-lg-6">
                <div className="ui-grid-box">Col-xs-6</div>
              </div>
              <div className="col-lg-6">
                <div className="ui-grid-box">Col-xs-6</div>
              </div>
              <div className="col-lg-4">
                <div className="ui-grid-box">Col-sm-4</div>
              </div>
              <div className="col-lg-4">
                <div className="ui-grid-box">Col-sm-4</div>
              </div>
              <div className="col-lg-4">
                <div className="ui-grid-box">Col-sm-4</div>
              </div>
              <div className="col-lg-4">
                <div className="ui-grid-box">Col-sm-4</div>
              </div>
              <div className="col-lg-3">
                <div className="ui-grid-box">Col-sm-3</div>
              </div>
              <div className="col-lg-3">
                <div className="ui-grid-box">Col-sm-3</div>
              </div>
              <div className="col-lg-2">
                <div className="ui-grid-box">Col-sm-2</div>
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

export default Grid;
