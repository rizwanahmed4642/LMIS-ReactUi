import React, { useState, useEffect } from "react";
import { GetAllWithPagination } from "../../Services/student-service";
import Pagination from "../../shared/Pagination";
import { Link } from "react-router-dom";

function AllBooks() {
  const [isLoading, setIsLoading] = useState(true);
  const [pageSize] = useState(10);
  const [searchByIDNo, setSearchByIdNo] = useState("");
  const [searchByBookName, setSearchByBookName] = useState("");
  const [searchByWriterName, setSearchByWriterName] = useState("");
  const [booksList, setBooksList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    FetchData(1);

    return () => clearTimeout(timer);
  }, []);

  const FetchData = async (Page) => {
    // debugger;
    const url =
      import.meta.env.REACT_APP_STUDENT_BASE_URL + "Library/GetAllBooks";
    const data = await GetAllWithPagination(
      url,
      "searchByIdNo",
      searchByIDNo,
      "searchByBookName",
      searchByBookName,
      "searchByWriterName",
      searchByWriterName,
      Page,
      pageSize
    );
    setBooksList(data);
    setTotalItems(data[0]?.totalCount);
  };

  const searchParentData = (e) => {
    e.preventDefault();
    FetchData(1);
  };

  const handlePageChange = (page) => {
    FetchData(page); // Fetch data for the selected page
  };

  return (
    <>
      {isLoading && <div id="preloader"></div>}
      <div className="dashboard-content-one">
        <div className="breadcrumbs-area">
          <h3>Library</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>All Library Books</li>
          </ul>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>All Books</h3>
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
                    value={searchByIDNo}
                    onChange={(e) => setSearchByIdNo(e.target.value)}
                  />
                </div>
                <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by Book Name ..."
                    className="form-control"
                    value={searchByBookName}
                    onChange={(e) => setSearchByBookName(e.target.value)}
                  />
                </div>
                <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by Writer Name ..."
                    className="form-control"
                    value={searchByWriterName}
                    onChange={(e) => setSearchByWriterName(e.target.value)}
                  />
                </div>
                <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                  <button
                    type="submit"
                    className="fw-btn-fill btn-gradient-yellow"
                    onClick={searchParentData}
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
                        <label className="form-check-label">ID</label>
                      </div>
                    </th>
                    <th>Book Name</th>
                    <th>Subject</th>
                    <th>Writter</th>
                    <th>Class</th>
                    <th>Published</th>
                    <th>Creating Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    booksList.map(res => {
                      return <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label">{res?.idNo}</label>
                        </div>
                      </td>
                      <td>{ res?.bookName }</td>
                      <td>{ res?.subjectName }</td>
                      <td>{ res?.writerName }</td>
                      <td>{ res?.className }</td>
                      <td>{ res?.publishingDate.toString().substring(0,10) }</td>
                      <td>{ res?.uploadDate.toString().substring(0,10) }</td>
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
                            {/* <a className="dropdown-item" href="#">
                              <i className="fas fa-times text-orange-red"></i>
                              Close
                            </a> */}
                            <Link className="dropdown-item" to={`/dashboard/add-books/${res?.libraryId}`}>
                              <i className="fas fa-cogs text-dark-pastel-green"></i>
                                Edit
                            </Link>
                            {/* <a className="dropdown-item" href="#">
                              <i className="fas fa-redo-alt text-orange-peel"></i>
                              Refresh
                            </a> */}
                          </div>
                        </div>
                      </td>
                    </tr>
                    })
                  }
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

export default AllBooks;
