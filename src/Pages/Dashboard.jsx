import React, { useEffect } from "react";
import "../App.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  useEffect(() => {
    $(".sidebar-toggle-view").on(
      "click",
      ".sidebar-nav-item .nav-link",
      function (e) {
        if (!$(this).parents("#wrapper").hasClass("sidebar-collapsed")) {
          var animationSpeed = 300,
            subMenuSelector = ".sub-group-menu",
            $this = $(this),
            checkElement = $this.next();
          if (checkElement.is(subMenuSelector) && checkElement.is(":visible")) {
            checkElement.slideUp(animationSpeed, function () {
              checkElement.removeClass("menu-open");
            });
            checkElement.parent(".sidebar-nav-item").removeClass("active");
          } else if (
            checkElement.is(subMenuSelector) &&
            !checkElement.is(":visible")
          ) {
            var parent = $this.parents("ul").first();
            var ul = parent.find("ul:visible").slideUp(animationSpeed);
            ul.removeClass("menu-open");
            var parent_li = $this.parent("li");
            checkElement.slideDown(animationSpeed, function () {
              checkElement.addClass("menu-open");
              parent.find(".sidebar-nav-item.active").removeClass("active");
              parent_li.addClass("active");
            });
          }
          if (checkElement.is(subMenuSelector)) {
            e.preventDefault();
          }
        } else {
          if ($(this).attr("href") === "#") {
            e.preventDefault();
          }
        }
      }
    );

    /*-------------------------------------
        Sidebar Menu Control
      -------------------------------------*/
    $(".sidebar-toggle").on("click", function () {
      window.setTimeout(function () {
        $("#wrapper").toggleClass("sidebar-collapsed");
      }, 500);
    });

    $(".sidebar-toggle-mobile").on("click", function () {
      $("#wrapper").toggleClass("sidebar-collapsed-mobile");
      if ($("#wrapper").hasClass("sidebar-collapsed")) {
        $("#wrapper").removeClass("sidebar-collapsed");
      }
    });
  }, []); // Empty dependency array to run once on mount

  return (
    <>
      <div id="wrapper" className="wrapper bg-ash">
        {/* Navbar Start */}
        <div className="navbar navbar-expand-md header-menu-one bg-light">
          <div className="nav-bar-header-one">
            <div className="header-logo">
              <Link to="/">
                <img src="/src/assets/img/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="toggle-button sidebar-toggle">
              <button type="button" className="item-link">
                <span className="btn-icon-wrap">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </div>
          <div className="d-md-none mobile-nav-bar">
            <button
              className="navbar-toggler pulse-animation"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-navbar"
              aria-expanded="false"
            >
              <i className="far fa-arrow-alt-circle-down"></i>
            </button>
            <button
              type="button"
              className="navbar-toggler sidebar-toggle-mobile"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className="header-main-menu collapse navbar-collapse"
            id="mobile-navbar"
          >
            <ul className="navbar-nav">
              <li className="navbar-item header-search-bar">
                <div className="input-group stylish-input-group">
                  <span className="input-group-addon">
                    <button type="submit">
                      <span
                        className="flaticon-search"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find Something . . ."
                  />
                </div>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="navbar-item dropdown header-admin">
                <a
                  className="navbar-nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="admin-title">
                    <h5 className="item-title">Stevne Zone</h5>
                    <span>Admin</span>
                  </div>
                  <div className="admin-img">
                    <img src="/src/assets/img/figure/admin.jpg" alt="Admin" />
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="item-header">
                    <h6 className="item-title">Steven Zone</h6>
                  </div>
                  <div className="item-content">
                    <ul className="settings-list">
                      <li>
                        <a href="#">
                          <i className="flaticon-user"></i>My Profile
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-list"></i>Task
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i>
                          Message
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-gear-loading"></i>Account
                          Settings
                        </a>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="flaticon-turn-off"></i>Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="navbar-item dropdown header-message">
                <a
                  className="navbar-nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="far fa-envelope"></i>
                  <div className="item-title d-md-none text-16 mg-l-10">
                    Message
                  </div>
                  <span>5</span>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                  <div className="item-header">
                    <h6 className="item-title">05 Message</h6>
                  </div>
                  <div className="item-content">
                    <div className="media">
                      <div className="item-img bg-skyblue author-online">
                        <img
                          src="/src/assets/img/figure/student11.png"
                          alt="img"
                        />
                      </div>
                      <div className="media-body space-sm">
                        <div className="item-title">
                          <a href="#">
                            <span className="item-name">Maria Zaman</span>
                            <span className="item-time">18:30</span>
                          </a>
                        </div>
                        <p>
                          What is the reason of buy this item. Is it usefull for
                          me.....
                        </p>
                      </div>
                    </div>
                    <div className="media">
                      <div className="item-img bg-yellow author-online">
                        <img
                          src="/src/assets/img/figure/student12.png"
                          alt="img"
                        />
                      </div>
                      <div className="media-body space-sm">
                        <div className="item-title">
                          <a href="#">
                            <span className="item-name">Benny Roy</span>
                            <span className="item-time">10:35</span>
                          </a>
                        </div>
                        <p>
                          What is the reason of buy this item. Is it usefull for
                          me.....
                        </p>
                      </div>
                    </div>
                    <div className="media">
                      <div className="item-img bg-pink">
                        <img
                          src="/src/assets/img/figure/student13.png"
                          alt="img"
                        />
                      </div>
                      <div className="media-body space-sm">
                        <div className="item-title">
                          <a href="#">
                            <span className="item-name">Steven</span>
                            <span className="item-time">02:35</span>
                          </a>
                        </div>
                        <p>
                          What is the reason of buy this item. Is it usefull for
                          me.....
                        </p>
                      </div>
                    </div>
                    <div className="media">
                      <div className="item-img bg-violet-blue">
                        <img
                          src="/src/assets/img/figure/student11.png"
                          alt="img"
                        />
                      </div>
                      <div className="media-body space-sm">
                        <div className="item-title">
                          <a href="#">
                            <span className="item-name">Joshep Joe</span>
                            <span className="item-time">12:35</span>
                          </a>
                        </div>
                        <p>
                          What is the reason of buy this item. Is it usefull for
                          me.....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="navbar-item dropdown header-notification">
                <a
                  className="navbar-nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="far fa-bell"></i>
                  <div className="item-title d-md-none text-16 mg-l-10">
                    Notification
                  </div>
                  <span>8</span>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                  <div className="item-header">
                    <h6 className="item-title">03 Notifiacations</h6>
                  </div>
                  <div className="item-content">
                    <div className="media">
                      <div className="item-icon bg-skyblue">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="media-body space-sm">
                        <div className="post-title">Complete Today Task</div>
                        <span>1 Mins ago</span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="item-icon bg-orange">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div className="media-body space-sm">
                        <div className="post-title">Director Metting</div>
                        <span>20 Mins ago</span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="item-icon bg-violet-blue">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <div className="media-body space-sm">
                        <div className="post-title">Update Password</div>
                        <span>45 Mins ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="navbar-item dropdown header-language">
                <a
                  className="navbar-nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-globe-americas"></i>EN
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                  <a className="dropdown-item" href="#">
                    Spanish
                  </a>
                  <a className="dropdown-item" href="#">
                    Franchis
                  </a>
                  <a className="dropdown-item" href="#">
                    Chiness
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Navbar End */}
        {/* Dashboard Start */}
        <div className="dashboard-page-one">
          <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
            <div className="mobile-sidebar-header d-md-none">
              <div className="header-logo">
                <Link to="/">
                  <img src="/src/assets/img/logo1.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="sidebar-menu-content">
              <ul className="nav nav-sidebar-menu sidebar-toggle-view">
                <li className="nav-item sidebar-nav-item">
                  <a href="#" className="nav-link">
                    <i className="flaticon-dashboard"></i>
                    <span>Dashboard</span>
                  </a>
                  <ul className="nav sub-group-menu">
                    <li className="nav-item">
                      <Link to="/dashboard" className="nav-link">
                        <i className="fas fa-angle-right"></i>Admin
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/StudentDashboard" className="nav-link">
                        <i className="fas fa-angle-right"></i>Students
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/ParentDashboard" className="nav-link">
                        <i className="fas fa-angle-right"></i>Parents
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/TeacherDashboard" className="nav-link">
                        <i className="fas fa-angle-right"></i>Teachers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item sidebar-nav-item">
                  <a href="#" className="nav-link">
                    <i className="flaticon-couple"></i>
                    <span>Students</span>
                  </a>
                  <ul className="nav sub-group-menu">
                    <li className="nav-item">
                      <Link to="/dashboard/all-students" className="nav-link">
                        <i className="fas fa-angle-right"></i>All Students
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/student-detail" className="nav-link">
                        <i className="fas fa-angle-right"></i>Student Details
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/admission-form" className="nav-link">
                        <i className="fas fa-angle-right"></i>Admission Form
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/student-promotion" className="nav-link">
                        <i className="fas fa-angle-right"></i>Student Promotion
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item sidebar-nav-item">
                  <a href="#" className="nav-link">
                    <i className="flaticon-multiple-users-silhouette"></i>
                    <span>Teachers</span>
                  </a>
                  <ul className="nav sub-group-menu">
                    <li className="nav-item">
                      <Link to="/dashboard/all-teachers" className="nav-link">
                        <i className="fas fa-angle-right"></i>All Teachers
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/teacher-detail" className="nav-link">
                        <i className="fas fa-angle-right"></i>Teacher Details
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/add-teacher" className="nav-link">
                        <i className="fas fa-angle-right"></i>Add Teacher
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/teacher-payment" className="nav-link">
                        <i className="fas fa-angle-right"></i>Payment
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item sidebar-nav-item">
                  <a href="#" className="nav-link">
                    <i className="flaticon-couple"></i>
                    <span>Parents</span>
                  </a>
                  <ul className="nav sub-group-menu">
                    <li className="nav-item">
                      <Link to="/dashboard/all-parents" className="nav-link">
                        <i className="fas fa-angle-right"></i>All Parents
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/parents-detail" className="nav-link">
                        <i className="fas fa-angle-right"></i>Parents Details
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/add-parents" className="nav-link">
                        <i className="fas fa-angle-right"></i>Add Parent
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item sidebar-nav-item">
                  <a href="#" className="nav-link">
                    <i className="flaticon-books"></i>
                    <span>Library</span>
                  </a>
                  <ul className="nav sub-group-menu">
                    <li className="nav-item">
                      <Link to="/dashboard/all-books" className="nav-link">
                        <i className="fas fa-angle-right"></i>All Book
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/add-books" className="nav-link">
                        <i className="fas fa-angle-right"></i>Add New Book
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item sidebar-nav-item">
                  <a href="#" className="nav-link">
                    <i className="flaticon-technological"></i>
                    <span>Acconunt</span>
                  </a>
                  <ul className="nav sub-group-menu">
                    <li className="nav-item">
                      <Link to="/dashboard/all-fees" className="nav-link">
                        <i className="fas fa-angle-right"></i>All Fees
                        Collection
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/all-expense" className="nav-link">
                        <i className="fas fa-angle-right"></i>Expenses
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/add-expense" className="nav-link">
                        <i className="fas fa-angle-right"></i>Add Expenses
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item sidebar-nav-item">
                  <a href="#" className="nav-link">
                    <i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                    <span>Class</span>
                  </a>
                  <ul className="nav sub-group-menu">
                    <li className="nav-item">
                      <Link to="/dashboard/all-classes" className="nav-link">
                        <i className="fas fa-angle-right"></i>All Classes
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/add-classes" className="nav-link">
                        <i className="fas fa-angle-right"></i>Add New className
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/all-subjects" className="nav-link">
                    <i className="flaticon-open-book"></i>
                    <span>Subject</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/class-routine" className="nav-link">
                    <i className="flaticon-calendar"></i>
                    <span>Class Routine</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/student-attendance" className="nav-link">
                    <i className="flaticon-checklist"></i>
                    <span>Attendence</span>
                  </Link>
                </li>
                <li className="nav-item sidebar-nav-item">
                  <a href="#" className="nav-link">
                    <i className="flaticon-shopping-list"></i>
                    <span>Exam</span>
                  </a>
                  <ul className="nav sub-group-menu">
                    <li className="nav-item">
                      <Link to="/dashboard/exam-schedule" className="nav-link">
                        <i className="fas fa-angle-right"></i>Exam Schedule
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/exam-grade" className="nav-link">
                        <i className="fas fa-angle-right"></i>Exam Grades
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/transport" className="nav-link">
                    <i className="flaticon-bus-side-view"></i>
                    <span>Transport</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/hostel" className="nav-link">
                    <i className="flaticon-bed"></i>
                    <span>Hostel</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/notice-board" className="nav-link">
                    <i className="flaticon-script"></i>
                    <span>Notice</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/messaging" className="nav-link">
                    <i className="flaticon-chat"></i>
                    <span>Messeage</span>
                  </Link>
                </li>
                <li className="nav-item sidebar-nav-item">
                  <a href="#" className="nav-link">
                    <i className="flaticon-menu-1"></i>
                    <span>UI Elements</span>
                  </a>
                  <ul className="nav sub-group-menu">
                    <li className="nav-item">
                      <Link to="/dashboard/notification-alart" className="nav-link">
                        <i className="fas fa-angle-right"></i>Alart
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/button" className="nav-link">
                        <i className="fas fa-angle-right"></i>Button
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/grid" className="nav-link">
                        <i className="fas fa-angle-right"></i>Grid
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/modal" className="nav-link">
                        <i className="fas fa-angle-right"></i>Modal
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/progress-bar" className="nav-link">
                        <i className="fas fa-angle-right"></i>Progress Bar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/ui-tab" className="nav-link">
                        <i className="fas fa-angle-right"></i>Tab
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/ui-widget" className="nav-link">
                        <i className="fas fa-angle-right"></i>Widget
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/map" className="nav-link">
                    <i className="flaticon-planet-earth"></i>
                    <span>Map</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/account-settings" className="nav-link">
                    <i className="flaticon-settings"></i>
                    <span>Account</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
