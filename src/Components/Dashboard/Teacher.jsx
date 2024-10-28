import React, { useEffect, useState } from "react";

function TeacherDashboard() {
    const [isLoading,setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000);
    },[])
  return (
    <>
    { isLoading && <div id="preloader"></div> }
      <div className="dashboard-content-one">
        <div className="breadcrumbs-area">
          <h3>Admin Dashboard</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Teachers</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-12 col-4-xxxl">
            <div className="row">
              <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
                <div className="dashboard-summery-two">
                  <div className="item-icon bg-light-magenta">
                    <i className="flaticon-classmates text-magenta"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-number">
                      <span className="counter" data-num="35000">
                        35,000
                      </span>
                    </div>
                    <div className="item-title">Total Students</div>
                  </div>
                </div>
              </div>
              <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
                <div className="dashboard-summery-two">
                  <div className="item-icon bg-light-blue">
                    <i className="flaticon-shopping-list text-blue"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-number">
                      <span className="counter" data-num="19050">
                        19,050
                      </span>
                    </div>
                    <div className="item-title">Total Exams</div>
                  </div>
                </div>
              </div>
              <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
                <div className="dashboard-summery-two">
                  <div className="item-icon bg-light-yellow">
                    <i className="flaticon-mortarboard text-orange"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-number">
                      <span className="counter" data-num="23890">
                        23,890
                      </span>
                    </div>
                    <div className="item-title">Graduate Studes</div>
                  </div>
                </div>
              </div>
              <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
                <div className="dashboard-summery-two">
                  <div className="item-icon bg-light-red">
                    <i className="flaticon-money text-red"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-number">
                      <span>$</span>
                      <span className="counter" data-num="2102050">
                        21,02,050
                      </span>
                    </div>
                    <div className="item-title">Total Income</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-4-xxxl col-xl-6">
            <div className="card dashboard-card-three">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Students</h3>
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
                <div className="doughnut-chart-wrap">
                  <canvas
                    id="student-doughnut-chart"
                    width="100"
                    height="270"
                  ></canvas>
                </div>
                <div className="student-report">
                  <div className="student-count pseudo-bg-blue">
                    <h4 className="item-title">Female Students</h4>
                    <div className="item-number">10,500</div>
                  </div>
                  <div className="student-count pseudo-bg-yellow">
                    <h4 className="item-title">Male Students</h4>
                    <div className="item-number">24,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-4-xxxl col-xl-6">
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
                <div className="notice-box-wrap">
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
                    <div className="post-date bg-skyblue">16 June, 2019</div>
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
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card dashboard-card-eleven">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>My Students</h3>
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
                      <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                        <input
                          type="text"
                          placeholder="Search by Roll ..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-4-xxxl col-xl-4 col-lg-4 col-12 form-group">
                        <input
                          type="text"
                          placeholder="Search by Name ..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                        <input
                          type="text"
                          placeholder="Search by Class ..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-1-xxxl col-xl-2 col-lg-2 col-12 form-group">
                        <button
                          type="submit"
                          className="fw-btn-fill btn-gradient-yellow"
                        >
                          SEARCH
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="table-responsive student-table-box">
                    <table className="table display data-table text-nowrap">
                      <thead>
                        <tr>
                          <th>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input checkAll"
                              />
                              <label className="form-check-label">Roll</label>
                            </div>
                          </th>
                          <th>Photo</th>
                          <th>Name</th>
                          <th>Gender</th>
                          <th>Class</th>
                          <th>Section</th>
                          <th>Parents</th>
                          <th>Address</th>
                          <th>Date Of Birth</th>
                          <th>Phone</th>
                          <th>E-mail</th>
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
                          <td className="text-center">
                            <img src="/src/assets/img/figure/student2.png" alt="student" />
                          </td>
                          <td>Mark Willy</td>
                          <td>Male</td>
                          <td>2</td>
                          <td>A</td>
                          <td>Jack Sparrow </td>
                          <td>TA-107 Newyork</td>
                          <td>02/05/2001</td>
                          <td>+ 123 9988568</td>
                          <td>kazifahim93@gmail.com</td>
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
                          <td className="text-center">
                            <img src="/src/assets/img/figure/student3.png" alt="student" />
                          </td>
                          <td>Jessia Rose</td>
                          <td>Female</td>
                          <td>1</td>
                          <td>A</td>
                          <td>Maria Jamans</td>
                          <td>59 Australia, Sydney</td>
                          <td>02/05/2001</td>
                          <td>+ 123 9988568</td>
                          <td>kazifahim93@gmail.com</td>
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
                          <td className="text-center">
                            <img src="/src/assets/img/figure/student4.png" alt="student" />
                          </td>
                          <td>Mark Willy</td>
                          <td>Male</td>
                          <td>2</td>
                          <td>A</td>
                          <td>Jack Sparrow </td>
                          <td>TA-107 Newyork</td>
                          <td>02/05/2001</td>
                          <td>+ 123 9988568</td>
                          <td>kazifahim93@gmail.com</td>
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
                          <td className="text-center">
                            <img src="/src/assets/img/figure/student5.png" alt="student" />
                          </td>
                          <td>Jessia Rose</td>
                          <td>Female</td>
                          <td>1</td>
                          <td>A</td>
                          <td>Maria Jamans</td>
                          <td>59 Australia, Sydney</td>
                          <td>02/05/2001</td>
                          <td>+ 123 9988568</td>
                          <td>kazifahim93@gmail.com</td>
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
                          <td className="text-center">
                            <img src="/src/assets/img/figure/student6.png" alt="student" />
                          </td>
                          <td>Mark Willy</td>
                          <td>Male</td>
                          <td>2</td>
                          <td>A</td>
                          <td>Jack Sparrow </td>
                          <td>TA-107 Newyork</td>
                          <td>02/05/2001</td>
                          <td>+ 123 9988568</td>
                          <td>kazifahim93@gmail.com</td>
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
                          <td className="text-center">
                            <img src="/src/assets/img/figure/student7.png" alt="student" />
                          </td>
                          <td>Jessia Rose</td>
                          <td>Female</td>
                          <td>1</td>
                          <td>A</td>
                          <td>Maria Jamans</td>
                          <td>59 Australia, Sydney</td>
                          <td>02/05/2001</td>
                          <td>+ 123 9988568</td>
                          <td>kazifahim93@gmail.com</td>
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
                          <td className="text-center">
                            <img src="/src/assets/img/figure/student8.png" alt="student" />
                          </td>
                          <td>Mark Willy</td>
                          <td>Male</td>
                          <td>2</td>
                          <td>A</td>
                          <td>Jack Sparrow </td>
                          <td>TA-107 Newyork</td>
                          <td>02/05/2001</td>
                          <td>+ 123 9988568</td>
                          <td>kazifahim93@gmail.com</td>
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
                              <label className="form-check-label">#0028</label>
                            </div>
                          </td>
                          <td className="text-center">
                            <img src="/src/assets/img/figure/student9.png" alt="student" />
                          </td>
                          <td>Jessia Rose</td>
                          <td>Female</td>
                          <td>1</td>
                          <td>A</td>
                          <td>Maria Jamans</td>
                          <td>59 Australia, Sydney</td>
                          <td>02/05/2001</td>
                          <td>+ 123 9988568</td>
                          <td>kazifahim93@gmail.com</td>
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
                              <label className="form-check-label">#0029</label>
                            </div>
                          </td>
                          <td className="text-center">
                            <img src="/src/assets/img/figure/student10.png" alt="student" />
                          </td>
                          <td>Mark Willy</td>
                          <td>Male</td>
                          <td>2</td>
                          <td>A</td>
                          <td>Jack Sparrow </td>
                          <td>TA-107 Newyork</td>
                          <td>02/05/2001</td>
                          <td>+ 123 9988568</td>
                          <td>kazifahim93@gmail.com</td>
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
                              <label className="form-check-label">#0030</label>
                            </div>
                          </td>
                          <td className="text-center">
                            <img src="/src/assets/img/figure/student6.png" alt="student" />
                          </td>
                          <td>Jessia Rose</td>
                          <td>Female</td>
                          <td>1</td>
                          <td>A</td>
                          <td>Maria Jamans</td>
                          <td>59 Australia, Sydney</td>
                          <td>02/05/2001</td>
                          <td>+ 123 9988568</td>
                          <td>kazifahim93@gmail.com</td>
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

export default TeacherDashboard;
