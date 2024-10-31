import React, { useState, useEffect } from "react";

function Hostel() {
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
          <h3>Hostel List</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Hostel</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-4-xxxl col-12">
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Add New Room</h3>
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
                      <label>Hostel Name</label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                      />
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Room Number</label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                      />
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Room Type</label>
                      <select className="select2 form-control">
                        <option value="">Please Select</option>
                        <option value="1">Big</option>
                        <option value="2">Medium</option>
                        <option value="3">Small</option>
                      </select>
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Number Of Bed</label>
                      <select className="select2 form-control">
                        <option value="">Please Select</option>
                        <option value="1">02</option>
                        <option value="2">03</option>
                        <option value="3">04</option>
                        <option value="4">05</option>
                      </select>
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Cost Per Bed</label>
                      <input
                        type="text"
                        placeholder="$00.00"
                        className="form-control"
                      />
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
                    <h3>Hostel Room Lists</h3>
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
                        placeholder="Search by Hostel ..."
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-3 col-12 form-group">
                      <input
                        type="text"
                        placeholder="Search by Room ..."
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-3 col-12 form-group">
                      <input
                        type="text"
                        placeholder="Search by Bed ..."
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
                              Hostel Name
                            </label>
                          </div>
                        </th>
                        <th>Room No</th>
                        <th>Room Type</th>
                        <th>No Of Bed</th>
                        <th>Cost Per Bed</th>
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
                              Boys - 101
                            </label>
                          </div>
                        </td>
                        <td>HT-3006</td>
                        <td>Big</td>
                        <td>03</td>
                        <td>$50.00</td>
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
                              Girls - 102
                            </label>
                          </div>
                        </td>
                        <td>HT-4016</td>
                        <td>Small</td>
                        <td>02</td>
                        <td>$20.00</td>
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
                              Boys - 105
                            </label>
                          </div>
                        </td>
                        <td>HT-5016</td>
                        <td>Medium</td>
                        <td>04</td>
                        <td>$40.00</td>
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
                              Boys - 101
                            </label>
                          </div>
                        </td>
                        <td>HT-3006</td>
                        <td>Big</td>
                        <td>03</td>
                        <td>$50.00</td>
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
                              Girls - 102
                            </label>
                          </div>
                        </td>
                        <td>HT-4016</td>
                        <td>Small</td>
                        <td>02</td>
                        <td>$20.00</td>
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
                              Boys - 105
                            </label>
                          </div>
                        </td>
                        <td>HT-5016</td>
                        <td>Medium</td>
                        <td>04</td>
                        <td>$40.00</td>
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
                              Boys - 101
                            </label>
                          </div>
                        </td>
                        <td>HT-3006</td>
                        <td>Big</td>
                        <td>03</td>
                        <td>$50.00</td>
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
                              Girls - 102
                            </label>
                          </div>
                        </td>
                        <td>HT-4016</td>
                        <td>Small</td>
                        <td>02</td>
                        <td>$20.00</td>
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
                              Boys - 105
                            </label>
                          </div>
                        </td>
                        <td>HT-5016</td>
                        <td>Medium</td>
                        <td>04</td>
                        <td>$40.00</td>
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
                              Boys - 101
                            </label>
                          </div>
                        </td>
                        <td>HT-3006</td>
                        <td>Big</td>
                        <td>03</td>
                        <td>$50.00</td>
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
                              Girls - 102
                            </label>
                          </div>
                        </td>
                        <td>HT-4016</td>
                        <td>Small</td>
                        <td>02</td>
                        <td>$20.00</td>
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
                              Boys - 105
                            </label>
                          </div>
                        </td>
                        <td>HT-5016</td>
                        <td>Medium</td>
                        <td>04</td>
                        <td>$40.00</td>
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
                              Boys - 105
                            </label>
                          </div>
                        </td>
                        <td>HT-5016</td>
                        <td>Medium</td>
                        <td>04</td>
                        <td>$40.00</td>
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
                              Boys - 101
                            </label>
                          </div>
                        </td>
                        <td>HT-3006</td>
                        <td>Big</td>
                        <td>03</td>
                        <td>$50.00</td>
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
                              Girls - 102
                            </label>
                          </div>
                        </td>
                        <td>HT-4016</td>
                        <td>Small</td>
                        <td>02</td>
                        <td>$20.00</td>
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
                              Boys - 105
                            </label>
                          </div>
                        </td>
                        <td>HT-5016</td>
                        <td>Medium</td>
                        <td>04</td>
                        <td>$40.00</td>
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
                              Boys - 101
                            </label>
                          </div>
                        </td>
                        <td>HT-3006</td>
                        <td>Big</td>
                        <td>03</td>
                        <td>$50.00</td>
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
                              Girls - 102
                            </label>
                          </div>
                        </td>
                        <td>HT-4016</td>
                        <td>Small</td>
                        <td>02</td>
                        <td>$20.00</td>
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
                              Boys - 105
                            </label>
                          </div>
                        </td>
                        <td>HT-5016</td>
                        <td>Medium</td>
                        <td>04</td>
                        <td>$40.00</td>
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
                              Boys - 101
                            </label>
                          </div>
                        </td>
                        <td>HT-3006</td>
                        <td>Big</td>
                        <td>03</td>
                        <td>$50.00</td>
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
                              Girls - 102
                            </label>
                          </div>
                        </td>
                        <td>HT-4016</td>
                        <td>Small</td>
                        <td>02</td>
                        <td>$20.00</td>
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
                              Boys - 105
                            </label>
                          </div>
                        </td>
                        <td>HT-5016</td>
                        <td>Medium</td>
                        <td>04</td>
                        <td>$40.00</td>
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

export default Hostel;