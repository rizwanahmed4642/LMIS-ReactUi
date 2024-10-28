import React, { useEffect, useState } from "react";

function ParentsDashboard() {
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
            <li>Parents</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-3-xxxl col-sm-6 col-12">
            <div className="dashboard-summery-one">
              <div className="row">
                <div className="col-6">
                  <div className="item-icon bg-light-red">
                    <i className="flaticon-money text-red"></i>
                  </div>
                </div>
                <div className="col-6">
                  <div className="item-content">
                    <div className="item-title">Due Fees</div>
                    <div className="item-number">
                      <span>$</span>
                      <span className="counter" data-num="4503">
                        4,503
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3-xxxl col-sm-6 col-12">
            <div className="dashboard-summery-one">
              <div className="row">
                <div className="col-6">
                  <div className="item-icon bg-light-magenta">
                    <i className="flaticon-shopping-list text-magenta"></i>
                  </div>
                </div>
                <div className="col-6">
                  <div className="item-content">
                    <div className="item-title">Notifications</div>
                    <div className="item-number">
                      <span className="counter" data-num="12">
                        12
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3-xxxl col-sm-6 col-12">
            <div className="dashboard-summery-one">
              <div className="row">
                <div className="col-6">
                  <div className="item-icon bg-light-yellow">
                    <i className="flaticon-mortarboard text-orange"></i>
                  </div>
                </div>
                <div className="col-6">
                  <div className="item-content">
                    <div className="item-title">Result</div>
                    <div className="item-number">
                      <span className="counter" data-num="16">
                        16
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3-xxxl col-sm-6 col-12">
            <div className="dashboard-summery-one">
              <div className="row">
                <div className="col-6">
                  <div className="item-icon bg-light-blue">
                    <i className="flaticon-money text-blue"></i>
                  </div>
                </div>
                <div className="col-6">
                  <div className="item-content">
                    <div className="item-title">Expenses</div>
                    <div className="item-number">
                      <span>$</span>
                      <span className="counter" data-num="193000">
                        1,93,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5-xxxl col-12">
            <div className="card dashboard-card-twelve">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>My Kids</h3>
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
                <div className="kids-details-wrap">
                  <div className="row">
                    <div className="col-12-xxxl col-xl-6 col-12">
                      <div className="kids-details-box mb-5">
                        <div className="item-img">
                          <img
                            src="/src/assets/img/figure/student.png"
                            alt="kids"
                          />
                        </div>
                        <div className="item-content table-responsive">
                          <table className="table text-nowrap">
                            <tbody>
                              <tr>
                                <td>Name:</td>
                                <td>Jessia Rose</td>
                              </tr>
                              <tr>
                                <td>Gender:</td>
                                <td>Female</td>
                              </tr>
                              <tr>
                                <td>Class:</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>Roll:</td>
                                <td>#2225</td>
                              </tr>
                              <tr>
                                <td>Section:</td>
                                <td>A</td>
                              </tr>
                              <tr>
                                <td>Admission Id:</td>
                                <td>#0021</td>
                              </tr>
                              <tr>
                                <td>Admission Date:</td>
                                <td>07.08.2017</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-12-xxxl col-xl-6 col-12">
                      <div className="kids-details-box">
                        <div className="item-img">
                          <img
                            src="/src/assets/img/figure/student1.png"
                            alt="kids"
                          />
                        </div>
                        <div className="item-content table-responsive">
                          <table className="table text-nowrap">
                            <tbody>
                              <tr>
                                <td>Name:</td>
                                <td>Jack Steve</td>
                              </tr>
                              <tr>
                                <td>Gender:</td>
                                <td>Male</td>
                              </tr>
                              <tr>
                                <td>Class:</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>Roll:</td>
                                <td>#2205</td>
                              </tr>
                              <tr>
                                <td>Section:</td>
                                <td>A</td>
                              </tr>
                              <tr>
                                <td>Admission Id:</td>
                                <td>#0045</td>
                              </tr>
                              <tr>
                                <td>Admission Date:</td>
                                <td>07.08.2017</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7-xxxl col-12">
            <div className="card dashboard-card-eleven">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Expenses</h3>
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
                <div className="table-box-wrap">
                  <form className="search-form-box">
                    <div className="row gutters-8">
                      <div className="col-lg-4 col-md-3 form-group">
                        <input
                          type="text"
                          placeholder="Search by Exam ..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 form-group">
                        <input
                          type="text"
                          placeholder="Search by Subject ..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 form-group">
                        <input
                          type="text"
                          placeholder="dd/mm/yyyy"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-2 col-md-3 form-group">
                        <button
                          type="submit"
                          className="fw-btn-fill btn-gradient-yellow"
                        >
                          SEARCH
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="table-responsive expenses-table-box">
                    <table className="table data-table text-nowrap">
                      <thead>
                        <tr>
                          <th>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input checkAll"
                              />
                              <label className="form-check-label">ID</label>
                            </div>
                          </th>
                          <th>Expanse</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>E-Mail</th>
                          <th>Date</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0021</label>
                            </div>
                          </td>
                          <td>Exam Fees</td>
                          <td>$150.00</td>
                          <td className="badge badge-pill badge-success d-block mg-t-8">
                            Paid
                          </td>
                          <td>akkhorschool@gmail.com</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0022</label>
                            </div>
                          </td>
                          <td>Semister Fees</td>
                          <td>$350.00</td>
                          <td className="badge badge-pill badge-danger d-block mg-t-8">
                            Due
                          </td>
                          <td>akkhorschool@gmail.com</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0023</label>
                            </div>
                          </td>
                          <td>Exam Fees</td>
                          <td>$150.00</td>
                          <td className="badge badge-pill badge-success d-block mg-t-8">
                            Paid
                          </td>
                          <td>akkhorschool@gmail.com</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0024</label>
                            </div>
                          </td>
                          <td>Exam Fees</td>
                          <td>$150.00</td>
                          <td className="badge badge-pill badge-danger d-block mg-t-8">
                            Due{" "}
                          </td>
                          <td>akkhorschool@gmail.com</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0025</label>
                            </div>
                          </td>
                          <td>Exam Fees</td>
                          <td>$150.00</td>
                          <td className="badge badge-pill badge-success d-block mg-t-8">
                            Paid
                          </td>
                          <td>akkhorschool@gmail.com</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0026</label>
                            </div>
                          </td>
                          <td>Semister Fees</td>
                          <td>$350.00</td>
                          <td className="badge badge-pill badge-danger d-block mg-t-8">
                            Due
                          </td>
                          <td>akkhorschool@gmail.com</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0027</label>
                            </div>
                          </td>
                          <td>Exam Fees</td>
                          <td>$150.00</td>
                          <td className="badge badge-pill badge-success d-block mg-t-8">
                            Paid
                          </td>
                          <td>akkhorschool@gmail.com</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-12">
            <div className="card dashboard-card-six">
              <div className="card-body">
                <div className="heading-layout1 mg-b-17">
                  <div className="item-title">
                    <h3>Notifications</h3>
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
                <div className="notice-box-wrap m-height-660">
                  <div className="notice-list">
                    <div className="post-date bg-skyblue">16 June, 2019</div>
                    <h6 className="notice-title">
                      <a href="#">
                        Great School manag mene esom tus eleifend lectus sed
                        maximus mi faucibusnting.
                      </a>
                    </h6>
                    <div className="entry-meta">
                      {" "}
                      Jennyfar Lopez / <span>5 min ago</span>
                    </div>
                  </div>
                  <div className="notice-list">
                    <div className="post-date bg-yellow">16 June, 2019</div>
                    <h6 className="notice-title">
                      <a href="#">Great School manag printing.</a>
                    </h6>
                    <div className="entry-meta">
                      {" "}
                      Jennyfar Lopez / <span>5 min ago</span>
                    </div>
                  </div>
                  <div className="notice-list">
                    <div className="post-date bg-pink">16 June, 2019</div>
                    <h6 className="notice-title">
                      <a href="#">
                        Great School manag Nulla rhoncus eleifensed mim us mi
                        faucibus id. Mauris vestibulum non purus
                        lobortismenearea
                      </a>
                    </h6>
                    <div className="entry-meta">
                      {" "}
                      Jennyfar Lopez / <span>5 min ago</span>
                    </div>
                  </div>
                  <div className="notice-list">
                    <div className="post-date bg-blue">16 June, 2019</div>
                    <h6 className="notice-title">
                      <a href="#">
                        Great School manag mene esom text of the printing.
                      </a>
                    </h6>
                    <div className="entry-meta">
                      {" "}
                      Jennyfar Lopez / <span>5 min ago</span>
                    </div>
                  </div>
                  <div className="notice-list">
                    <div className="post-date bg-yellow">16 June, 2019</div>
                    <h6 className="notice-title">
                      <a href="#">Great School manag printing.</a>
                    </h6>
                    <div className="entry-meta">
                      {" "}
                      Jennyfar Lopez / <span>5 min ago</span>
                    </div>
                  </div>
                  <div className="notice-list">
                    <div className="post-date bg-blue">16 June, 2019</div>
                    <h6 className="notice-title">
                      <a href="#">Great School manag meneesom.</a>
                    </h6>
                    <div className="entry-meta">
                      {" "}
                      Jennyfar Lopez / <span>5 min ago</span>
                    </div>
                  </div>
                  <div className="notice-list">
                    <div className="post-date bg-pink">16 June, 2019</div>
                    <h6 className="notice-title">
                      <a href="#">Great School manag meneesom.</a>
                    </h6>
                    <div className="entry-meta">
                      {" "}
                      Jennyfar Lopez / <span>5 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-12">
            <div className="card dashboard-card-eleven">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Exam Results</h3>
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
                <div className="table-box-wrap">
                  <form className="search-form-box">
                    <div className="row gutters-8">
                      <div className="col-lg-4 col-md-3 form-group">
                        <input
                          type="text"
                          placeholder="Search by Exam ..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 form-group">
                        <input
                          type="text"
                          placeholder="Search by Subject ..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 form-group">
                        <input
                          type="text"
                          placeholder="dd/mm/yyyy"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-2 col-md-3 form-group">
                        <button
                          type="submit"
                          className="fw-btn-fill btn-gradient-yellow"
                        >
                          SEARCH
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="table-responsive result-table-box">
                    <table className="table display data-table text-nowrap">
                      <thead>
                        <tr>
                          <th>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input checkAll"
                              />
                              <label className="form-check-label">ID</label>
                            </div>
                          </th>
                          <th>Exam Name</th>
                          <th>Subject</th>
                          <th>Class</th>
                          <th>Roll</th>
                          <th>Grade</th>
                          <th>Percent</th>
                          <th>Date</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0021</label>
                            </div>
                          </td>
                          <td>Class Test</td>
                          <td>English</td>
                          <td>2</td>
                          <td>#0045</td>
                          <td>A</td>
                          <td>99.00 &gt; 100</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0022</label>
                            </div>
                          </td>
                          <td>Class Test</td>
                          <td>English</td>
                          <td>1</td>
                          <td>#0025</td>
                          <td>A</td>
                          <td>99.00 &gt; 100</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0023</label>
                            </div>
                          </td>
                          <td>Class Test</td>
                          <td>Drawing</td>
                          <td>2</td>
                          <td>#0045</td>
                          <td>A</td>
                          <td>99.00 &gt; 100</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0024</label>
                            </div>
                          </td>
                          <td>Class Test</td>
                          <td>English</td>
                          <td>1</td>
                          <td>#0048</td>
                          <td>A</td>
                          <td>99.00 &gt; 100</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0025</label>
                            </div>
                          </td>
                          <td>Class Test</td>
                          <td>Chemistry</td>
                          <td>8</td>
                          <td>#0050</td>
                          <td>A</td>
                          <td>99.00 &gt; 100</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0025</label>
                            </div>
                          </td>
                          <td>Class Test</td>
                          <td>Bangla</td>
                          <td>4</td>
                          <td>#0035</td>
                          <td>D</td>
                          <td>70.00 &gt; 100</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0025</label>
                            </div>
                          </td>
                          <td>Class Test</td>
                          <td>Drawing</td>
                          <td>2</td>
                          <td>#0045</td>
                          <td>C</td>
                          <td>80.00 &gt; 100</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0025</label>
                            </div>
                          </td>
                          <td>Class Test</td>
                          <td>English</td>
                          <td>4</td>
                          <td>#0048</td>
                          <td>B</td>
                          <td>99.00 &gt; 100</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">#0025</label>
                            </div>
                          </td>
                          <td>First Semister</td>
                          <td>English</td>
                          <td>2</td>
                          <td>#0045</td>
                          <td>A</td>
                          <td>99.00 &gt; 100</td>
                          <td>22/02/2019</td>
                          <td>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="flaticon-more-button-of-three-dots"></span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">
                                  <i className="fas fa-times text-orange-red"></i>
                                  Close
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

export default ParentsDashboard;
