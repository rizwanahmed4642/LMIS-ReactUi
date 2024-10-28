import React, { useState, useEffect } from "react";

function ExamSchedule() {
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
          <h3>Examination</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Exam Schedule</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-4-xxxl col-12">
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Add New Exam</h3>
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
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Exam Name</label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                      />
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Subject Type *</label>
                      <select className="select2 form-control">
                        <option value="">Please Select</option>
                        <option value="1">Bangla</option>
                        <option value="2">English</option>
                        <option value="3">Mathematics</option>
                        <option value="3">Economics</option>
                        <option value="3">Chemistry</option>
                      </select>
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Select Class *</label>
                      <select className="select2 form-control">
                        <option value="0">Please Select</option>
                        <option value="1">Play</option>
                        <option value="2">Nursery</option>
                        <option value="3">One</option>
                        <option value="3">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Select Section</label>
                      <select className="select2 form-control">
                        <option value="0">Please Select</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        <option value="3">D</option>
                        <option value="3">E</option>
                      </select>
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Select Time</label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                      />
                      <i className="far fa-clock"></i>
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Select Date</label>
                      <input
                        type="text"
                        placeholder="dd/mm/yyyy"
                        className="form-control air-datepicker"
                      />
                      <i className="far fa-calendar-alt"></i>
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
          <div className="col-8-xxxl col-12">
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Exam Schedule</h3>
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
                <form className="mg-b-20">
                  <div className="row gutters-8">
                    <div className="col-lg-4 col-12 form-group">
                      <input
                        type="text"
                        placeholder="Search by Exam ..."
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-3 col-12 form-group">
                      <input
                        type="text"
                        placeholder="Search by Subject ..."
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-3 col-12 form-group">
                      <input
                        type="text"
                        placeholder="Search by Date ..."
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-2 col-12 form-group">
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
                  <table className="table display data-table text-nowrap">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input checkAll"
                            />
                            <label className="form-check-label">
                              Exam Name
                            </label>
                          </div>
                        </th>
                        <th>Subject</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Time</th>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Mathematics</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>English</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Chemistry</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Mathematics</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>English</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Chemistry</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Mathematics</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>English</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Chemistry</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Mathematics</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>English</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Chemistry</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Chemistry</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Mathematics</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>English</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Chemistry</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Mathematics</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>English</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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
                            <label className="form-check-label">
                              Class Test
                            </label>
                          </div>
                        </td>
                        <td>Chemistry</td>
                        <td>4</td>
                        <td>A</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>20/06/2019</td>
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

export default ExamSchedule;
