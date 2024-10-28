import React,{useState,useEffect} from "react";

function AllFeeCollection() {
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
          <h3>Accounts</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Fees Collection</li>
          </ul>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>All Fees Collection</h3>
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
            <form className="mg-b-20">
              <div className="row gutters-8">
                <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by ID ..."
                    className="form-control"
                  />
                </div>
                <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by Name ..."
                    className="form-control"
                  />
                </div>
                <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by Phone"
                    className="form-control"
                  />
                </div>
                <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                  <button
                    type="submit"
                    className="fw-btn-fill btn-gradient-yellow"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </form>
            <div className="table-responsive">
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
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Expense</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0021</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student2.png" alt="student" />
                    </td>
                    <td>Mark Willy</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0022</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student3.png" alt="student" />
                    </td>
                    <td>Jessia</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0023</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student4.png" alt="student" />
                    </td>
                    <td>Mike John</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0024</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student6.png" alt="student" />
                    </td>
                    <td>Maria Jaman</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$4,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0025</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student2.png" alt="student" />
                    </td>
                    <td>Mark Willy</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0026</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student3.png" alt="student" />
                    </td>
                    <td>Jessia</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0027</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student4.png" alt="student" />
                    </td>
                    <td>Mike John</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0028</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student6.png" alt="student" />
                    </td>
                    <td>Maria Jaman</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$4,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0029</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student2.png" alt="student" />
                    </td>
                    <td>Mark Willy</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0030</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student3.png" alt="student" />
                    </td>
                    <td>Jessia</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0031</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student4.png" alt="student" />
                    </td>
                    <td>Mike John</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0032</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student6.png" alt="student" />
                    </td>
                    <td>Maria Jaman</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$4,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0033</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student8.png" alt="student" />
                    </td>
                    <td>Mark Willy</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0034</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student3.png" alt="student" />
                    </td>
                    <td>Jessia</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0035</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student4.png" alt="student" />
                    </td>
                    <td>Mike John</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0036</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student6.png" alt="student" />
                    </td>
                    <td>Maria Jaman</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$4,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0037</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student2.png" alt="student" />
                    </td>
                    <td>Mark Willy</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0038</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student3.png" alt="student" />
                    </td>
                    <td>Jessia</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0039</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student4.png" alt="student" />
                    </td>
                    <td>Mike John</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0040</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student6.png" alt="student" />
                    </td>
                    <td>Maria Jaman</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$4,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0041</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student2.png" alt="student" />
                    </td>
                    <td>Mark Willy</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0042</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student3.png" alt="student" />
                    </td>
                    <td>Jessia</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0043</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student4.png" alt="student" />
                    </td>
                    <td>Mike John</td>
                    <td>Male</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$2,0000.00</td>
                    <td className="badge badge-pill badge-success d-block mg-t-8">
                      Paid
                    </td>
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
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">#0044</label>
                      </div>
                    </td>
                    <td>
                      <img src="/src/assets/img/figure/student6.png" alt="student" />
                    </td>
                    <td>Maria Jaman</td>
                    <td>Female</td>
                    <td>2</td>
                    <td>A</td>
                    <td>Class Test</td>
                    <td>$4,0000.00</td>
                    <td className="badge badge-pill badge-danger d-block mg-t-8">
                      Unpaid
                    </td>
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

export default AllFeeCollection;
