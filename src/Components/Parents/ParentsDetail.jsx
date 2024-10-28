import React, { useState, useEffect } from "react";

function ParentsDetail() {
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
          <h3>Parents</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Parents Details</li>
          </ul>
        </div>

        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>About Me</h3>
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
            <div className="single-info-details">
              <div className="item-img">
                <img src="/src/assets/img/figure/parents.jpg" alt="student" />
              </div>
              <div className="item-content">
                <div className="header-inline item-header">
                  <h3 className="text-dark-medium font-medium">Steven Jones</h3>
                  <div className="header-elements">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-edit"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-print"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-download"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Aliquam erat volutpat. Curabiene natis massa sedde lacu
                  stiquen sodale word moun taiery.Aliquam erat volutpaturabiene
                  natis massa sedde sodale word moun taiery.
                </p>
                <div className="info-table table-responsive">
                  <table className="table text-nowrap">
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td className="font-medium text-dark-medium">
                          Steven Jones
                        </td>
                      </tr>
                      <tr>
                        <td>Gender:</td>
                        <td className="font-medium text-dark-medium">Male</td>
                      </tr>
                      <tr>
                        <td>Occupation:</td>
                        <td className="font-medium text-dark-medium">
                          Business
                        </td>
                      </tr>
                      <tr>
                        <td>ID:</td>
                        <td className="font-medium text-dark-medium">#15059</td>
                      </tr>
                      <tr>
                        <td>Address:</td>
                        <td className="font-medium text-dark-medium">
                          House #10, Road #6, Australia
                        </td>
                      </tr>
                      <tr>
                        <td>Religion:</td>
                        <td className="font-medium text-dark-medium">Islam</td>
                      </tr>
                      <tr>
                        <td>Phone:</td>
                        <td className="font-medium text-dark-medium">
                          + 88 98568888418
                        </td>
                      </tr>
                      <tr>
                        <td>E-mail:</td>
                        <td className="font-medium text-dark-medium">
                          jessiarose@gmail.com
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default ParentsDetail;
