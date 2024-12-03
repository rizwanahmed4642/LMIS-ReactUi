import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetByQueryId } from "../../Services/student-service";

function ParentsDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [parent, setParent] = useState({});
  const parentId = useParams("id");

  useEffect(() => {
    const url = import.meta.env.REACT_APP_STUDENT_BASE_URL + "Parents/GetSingleParentForView";
    const FetchData = async () => {
      if (parentId) {
        setParent(await GetByQueryId(url,parentId.id));
      } else {
        navigate("/dashboard")
      }
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    FetchData();
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
                <img src={parent?.parentPhotoBase64} alt="parent" />
              </div>
              <div className="item-content">
                <div className="header-inline item-header">
                  <h3 className="text-dark-medium font-medium">{parent?.fullName}</h3>
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
                  {parent?.shortBio}
                </p>
                <div className="info-table table-responsive">
                  <table className="table text-nowrap">
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td className="font-medium text-dark-medium">
                          {parent?.fullName}
                        </td>
                      </tr>
                      <tr>
                        <td>Gender:</td>
                        <td className="font-medium text-dark-medium">{parent?.gender}</td>
                      </tr>
                      <tr>
                        <td>Occupation:</td>
                        <td className="font-medium text-dark-medium">
                          {parent?.occupation}
                        </td>
                      </tr>
                      <tr>
                        <td>ID:</td>
                        <td className="font-medium text-dark-medium">{parent?.idNo}</td>
                      </tr>
                      <tr>
                        <td>Address:</td>
                        <td className="font-medium text-dark-medium">
                          {parent?.address}
                        </td>
                      </tr>
                      <tr>
                        <td>Religion:</td>
                        <td className="font-medium text-dark-medium">{parent?.religion}</td>
                      </tr>
                      <tr>
                        <td>Phone:</td>
                        <td className="font-medium text-dark-medium">
                          {parent?.phoneNo}
                        </td>
                      </tr>
                      <tr>
                        <td>E-mail:</td>
                        <td className="font-medium text-dark-medium">
                          {parent?.email}
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
