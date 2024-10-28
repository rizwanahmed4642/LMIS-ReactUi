import React, { useState, useEffect } from "react";

function AddParent() {
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
            <li>Add New Parents</li>
          </ul>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>Add New Parents</h3>
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
            <form className="new-added-form">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>First Name *</label>
                  <input type="text" placeholder="" className="form-control" />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Last Name *</label>
                  <input type="text" placeholder="" className="form-control" />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Gender *</label>
                  <select className="select2 form-control">
                    <option value="">Please Select Gender *</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Others</option>
                  </select>
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Occupation</label>
                  <input type="text" placeholder="" className="form-control" />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>ID No</label>
                  <input type="text" placeholder="" className="form-control" />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Blood Group *</label>
                  <select className="select2 form-control">
                    <option value="">Please Select Group *</option>
                    <option value="1">A+</option>
                    <option value="2">A-</option>
                    <option value="3">B+</option>
                    <option value="3">B-</option>
                    <option value="3">O+</option>
                    <option value="3">O-</option>
                  </select>
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Religion *</label>
                  <select className="select2 form-control">
                    <option value="">Please Select Religion *</option>
                    <option value="1">Islam</option>
                    <option value="2">Hindu</option>
                    <option value="3">Christian</option>
                    <option value="3">Buddish</option>
                    <option value="3">Others</option>
                  </select>
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>E-Mail</label>
                  <input type="email" placeholder="" className="form-control" />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Address</label>
                  <input type="text" placeholder="" className="form-control" />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Phone</label>
                  <input type="text" placeholder="" className="form-control" />
                </div>
                <div className="col-md-6 d-none d-xl-block"></div>
                <div className="col-lg-6 col-12 form-group">
                  <label>Short BIO</label>
                  <textarea
                    className="textarea form-control"
                    name="message"
                    id="form-message"
                    cols="10"
                    rows="9"
                  ></textarea>
                </div>
                <div className="col-lg-6 col-12 form-group mg-t-30">
                  <label className="text-dark-medium">
                    Upload Student Photo (150px X 150px)
                  </label>
                  <input type="file" className="form-control-file" />
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

export default AddParent;
