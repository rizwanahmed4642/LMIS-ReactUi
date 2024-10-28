import React, { useState, useEffect } from "react";

function Modal() {
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
            <li>Modals</li>
          </ul>
        </div>

        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1 mg-b-15">
              <div className="item-title">
                <h3>Basic Modals</h3>
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
            <div className="ui-modal-box">
              <div className="modal-box">
                <label>Standard Modal</label>

                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#standard-modal"
                >
                  Lunch Live Demo
                </button>

                <div
                  className="modal fade"
                  id="standard-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        Woohoo, you're reading this text in a modal!
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="footer-btn bg-dark-low"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="footer-btn bg-linkedin"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-box">
                <label>Scrolling Long Modal</label>
                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#long-modal"
                >
                  Lunch long Scrolling Live Demo
                </button>

                <div
                  className="modal fade"
                  id="long-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Vivamus sagittis
                          lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla. Cras mattis
                          consectetur purus sit amet fermentum. Cras justo odio,
                          dapibus ac facilisis in, egestas eget quam. Morbi leo
                          risus, porta ac consectetur ac, vestibulum at eros.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.Aenean lacinia
                          bibendum nulla sed consectetur. Praesent commodo
                          cursus magna, vel scelerisque nisl consectetur et.
                          Donec sed odio dui. Donec ullamcorper nulla non metus
                          auctor fringilla. Cras mattis consectetur purus sit
                          amet fermentum. Cras justo odio, dapibus ac facilisis
                          in, egestas eget quam. Morbi leo risus, porta ac
                          consectetur ac, vestibulum at eros. Praesent commodo
                          cursus magna, vel scelerisque nisl consectetur et.
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor.Aenean lacinia bibendum nulla
                          sed consectetur. Praesent commodo cursus magna
                        </p>
                        <p>
                          vel scelerisque nisl consectetur et. Donec sed odio
                          dui. Donec ullamcorper nulla non metus auctor
                          fringilla. Cras mattis consectetur purus sit amet
                          fermentum. Cras justo odio, dapibus ac facilisis in,
                          egestas eget quam. Morbi leo risus, porta ac
                          consectetur ac, vestibulum at eros. Praesent commodo
                          cursus magna, vel scelerisque nisl consectetur et.
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Aenean lacinia bibendum nulla
                          sed consectetur. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Donec sed odio dui.
                          Donec ullamcorper nulla non metus auctor fringilla.
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Vivamus sagittis
                          lacus vel augue laoreet rutrum faucibus dolor auctor.
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla. Cras mattis
                          consectetur purus sit amet fermentum. Cras justo odio,
                          dapibus ac facilisis in, egestas eget quam. Morbi leo
                          risus, porta ac consectetur ac, vestibulum at eros.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="footer-btn bg-dark-low"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="footer-btn bg-linkedin"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-box">
                <label>Modal With Events</label>

                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#success-modal"
                >
                  Show Success
                </button>
                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#confirmation-modal"
                >
                  Show Confirmation
                </button>
                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#error-modal"
                >
                  Show Error
                </button>

                <div
                  className="modal fade"
                  id="success-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog success-modal-content"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="success-message">
                          <div className="item-icon">
                            <i className="fas fa-check"></i>
                          </div>
                          <h3 className="item-title">
                            Successfully Message Sent
                          </h3>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="footer-btn bg-linkedin"
                          data-dismiss="modal"
                        >
                          Okay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="confirmation-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog success-modal-content"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="success-message">
                          <div className="item-icon">
                            <i className="fas fa-exclamation"></i>
                          </div>
                          <h3 className="item-title">
                            You want to delete this file ?
                          </h3>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="footer-btn bg-linkedin"
                        >
                          Ok
                        </button>
                        <button
                          type="button"
                          className="footer-btn bg-dark-low"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="error-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog success-modal-content"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="success-message">
                          <div className="item-icon">
                            <i className="fas fa-exclamation-triangle"></i>
                          </div>
                          <h3 className="item-title">
                            An error things happen !
                          </h3>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="footer-btn bg-linkedin"
                          data-dismiss="modal"
                        >
                          Okay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-box">
                <label>Modal Sizes</label>

                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#large-modal"
                >
                  Large Modal
                </button>
                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#small-modal"
                >
                  Small Modal
                </button>

                <div
                  className="modal fade"
                  id="large-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Large Modal</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h3 className="font-semibold">
                          You are seeing Large Modal
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aspernatur, assumenda aut eaque eius error, eum
                          expedita iusto nobis obcaecati, perspiciatis quae quos
                          saepe similique! Iure non perspiciatis qui veniam
                          vitae!
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="footer-btn bg-dark-low"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="footer-btn bg-linkedin"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="small-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Small Modal</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h3 className="font-semibold">This is Small Modal</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aspernatur, assumenda aut eaque eius error,
                          veniam vitae!
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="footer-btn bg-dark-low"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="footer-btn bg-linkedin"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1 mg-b-15">
              <div className="item-title">
                <h3>Modals Variations</h3>
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
            <div className="ui-modal-box">
              <div className="modal-box">
                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#sign-up"
                >
                  Custom Modal
                </button>

                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#left-slide-modal"
                >
                  Slide From Left
                </button>

                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#right-slide-modal"
                >
                  Slide From Right
                </button>

                <div
                  className="modal left-slide-modal fade"
                  id="left-slide-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        Woohoo, you're reading this text in a modal!
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="footer-btn bg-dark-low"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="footer-btn bg-linkedin"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal right-slide-modal fade"
                  id="right-slide-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        Woohoo, you're reading this text in a modal!
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="footer-btn bg-dark-low"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="footer-btn bg-linkedin"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1 mg-b-15">
              <div className="item-title">
                <h3>Custom Modals</h3>
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
            <div className="ui-modal-box">
              <p>
                We have modified bootstraps base modal to generate different
                popup banners
              </p>
              <div className="modal-box">
                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#sign-up"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#notification-modal"
                >
                  Notifications
                </button>
                <button
                  type="button"
                  className="modal-trigger"
                  data-toggle="modal"
                  data-target="#feedback-modal"
                >
                  Feedback
                </button>

                <div
                  className="modal sign-up-modal fade"
                  id="sign-up"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="close-btn">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="item-logo">
                          <img src="/src/assets/img/logo2.png" alt="logo" />
                        </div>
                        <form className="login-form">
                          <div className="row gutters-15">
                            <div className="form-group col-12">
                              <input
                                type="text"
                                placeholder="Name"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group col-12">
                              <input
                                type="text"
                                placeholder="E-mail"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group col-sm-6">
                              <input
                                type="text"
                                placeholder="City"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group col-sm-6">
                              <input
                                type="text"
                                placeholder="Zip Code"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group col-12">
                              <input
                                type="text"
                                placeholder="Password"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group col-12">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="remember-me"
                                />
                                <label
                                  htmlFor="remember-me"
                                  className="form-check-label"
                                >
                                  I agree to tha terms & condition
                                </label>
                              </div>
                            </div>
                            <div className="form-group col-12">
                              <button type="submit" className="login-btn">
                                Create Account
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal notification-modal fade"
                  id="notification-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body">
                        <h5 className="item-title">School Management System</h5>
                        <p>
                          Lorem ipsum dolor consectetur amet maiores unde natus.
                        </p>
                        <div className="close-btn">
                          <button
                            type="button"
                            className="item-btn"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            Join Akkhor
                          </button>
                          <button
                            type="button"
                            className="close-btn"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal feedback-modal fade"
                  id="feedback-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="close-btn">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <h3 className="item-title">Feedback</h3>
                        <p>
                          Before you leave please tell us know the reason why
                          you leave
                        </p>
                        <form className="feedback-form">
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="feedback1"
                              />
                              <label
                                htmlFor="feedback1"
                                className="form-check-label"
                              >
                                Service was not suitable for me.
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="feedback2"
                              />
                              <label
                                htmlFor="feedback2"
                                className="form-check-label"
                              >
                                Service was not upto mark.
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="feedback3"
                              />
                              <label
                                htmlFor="feedback3"
                                className="form-check-label"
                              >
                                Pricing issue.
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="feedback4"
                              />
                              <label
                                htmlFor="feedback4"
                                className="form-check-label"
                              >
                                So much bug.
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="feedback5"
                              />
                              <label
                                htmlFor="feedback5"
                                className="form-check-label"
                              >
                                Need better customer support.
                              </label>
                            </div>
                          </div>
                          <div className="form-group mt-5">
                            <button
                              type="button"
                              className="item-btn"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              Share Feedback
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default Modal;
