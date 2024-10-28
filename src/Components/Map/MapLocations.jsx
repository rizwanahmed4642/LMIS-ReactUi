import React, { useState, useEffect } from "react";

function MapLocations() {
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
          <h3>Admin Dashboard</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Map</li>
          </ul>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card google-map-area">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Marker Map</h3>
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
                <div className="default-map">
                  <div
                    id="markergoogleMap"
                    style={{
                      inlineSize:"100%", blockSize:"660px", borderRadius: "4px"
                    }}
                  ></div>
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

export default MapLocations;
