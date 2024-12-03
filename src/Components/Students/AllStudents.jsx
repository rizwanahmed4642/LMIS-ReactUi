import React, { useState, useEffect } from "react";
import { Delete, Get, GetAllWithPagination } from "../../Services/student-service";
import { Link } from "react-router-dom";
import Pagination from "../../shared/Pagination";

function AllStudents() {
  const [isLoading, setLoading] = useState(true);
  const [studentList, setStudentList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [pageSize] = useState(10);
  const [searchByRollNo, setSearchByRollNo] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [searchByClass, setSearchByClass] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    FetchData(1);
  }, []);

  const FetchData = async (Page) => {
    // debugger;
    const url =
      import.meta.env.REACT_APP_STUDENT_BASE_URL + "Students/GetAllStudents";
    const data = await GetAllWithPagination(url,"searchByName",searchByName,"searchByClass",searchByClass,"searchByRollNo",searchByRollNo, Page, pageSize);
    setStudentList(data);
    setTotalItems(data[0]?.totalCount);
  };

  const searchStudentData = (e) => {
    e.preventDefault();
    FetchData(1);
  }

  const handlePageChange = (page) => {
    FetchData(page); // Fetch data for the selected page
  };

  const DeleteStudent = async (uId) => {
    // debugger
    const url =
    import.meta.env.REACT_APP_STUDENT_BASE_URL + "Students/DELETESTUDENTRECORD";
    const data = await Delete(url, uId); 
    if (data) {
      FetchData(1);
    }
  }

  return (
    <>
      {isLoading && <div id="preloader"></div>}
      <div className="dashboard-content-one">
        <div className="breadcrumbs-area">
          <h3>Students</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>All Students</li>
          </ul>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>All Students Data</h3>
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
                  <a className="dropdown-item" onClick={() => FetchData(1)}>
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
                    placeholder="Search by Roll ..."
                    className="form-control"
                    value={searchByRollNo}
                    onChange={(e) => setSearchByRollNo(e.target.value)}
                  />
                </div>
                <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by Name ..."
                    className="form-control"
                    value={searchByName}
                    onChange={(e) => setSearchByName(e.target.value)}
                  />
                </div>
                <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by Class ..."
                    className="form-control"
                    value={searchByClass}
                    onChange={(e) => setSearchByClass(e.target.value)}
                  />
                </div>
                <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                  <button
                    type="submit"
                    className="fw-btn-fill btn-gradient-yellow"
                    onClick={searchStudentData}
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
                  {(studentList &&
                    studentList.length > 0) &&
                    studentList.map((res, index) => {
                      return (
                        <tr key={index}>
                          <td key={index + 2}>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">
                                {res?.rollNo}
                              </label>
                            </div>
                          </td>
                          <td className="text-center">
                            <img src={res?.studentPhotoBase64} alt="student" />
                          </td>
                          <td>{res?.fullName}</td>
                          <td>{res?.gender}</td>
                          <td>{res?.studentClass}</td>
                          <td>{res?.section}</td>
                          <td>{res?.fatherName}</td>
                          <td>{res?.address}</td>
                          <td>{res?.dateOfBirth}</td>
                          <td>{res?.phoneNo}</td>
                          <td>{res?.email}</td>
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
                                <Link
                                  className="dropdown-item"
                                  to={"/dashboard/student-detail/" + res.userId}
                                >
                                  <i className="fas fa-eye text-orange-red"></i>{" "}
                                  View
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to={`/dashboard/admission-form/${res.userId}`}
                                >
                                  <i className="fas fa-cogs text-dark-pastel-green"></i>{" "}
                                  Edit
                                </Link>
                                <Link className="dropdown-item" onClick={() => DeleteStudent(res.userId)}>
                                  <i className="fas fa-trash"></i>{" "}
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <Pagination
              totalItems={totalItems}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
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

export default AllStudents;
