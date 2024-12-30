import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookFormSchema } from "../../Schemas";
import { GetByQueryId, GetByShortName, Post } from "../../Services/student-service";
import {
  studentClassShortName,
  subjectShortName,
} from "../../Constants/ShortNameConstants";
import { BookFormInitialValue } from "../../Schemas/SchemaInitialValues";

function AddBook() {
  const [isLoading, setIsLoading] = useState(true);
  const [subjectList, setSubjectList] = useState([]);
  const [studentClassList, setStudentClassList] = useState([]);
  const [bookFormValues, setBookFormValues] = useState({
    libraryId: null,
    bookName: "",
    subjectTypeProfileId: "",
    writerName: "",
    classTypeProfileId: "",
    idNo: "",
    publishingDate: "",
    uploadDate: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const fetchData = async () => {
      debugger
      if (id) {
        const url =
          import.meta.env.REACT_APP_STUDENT_BASE_URL +
          "Library/GetSingleBookRecord";
        const singleRecord = await GetByQueryId(url, id);
        if (singleRecord) {
          const formValue = BookFormInitialValue(singleRecord);
          setBookFormValues(formValue);
        }
      }

      const url =
        import.meta.env.REACT_APP_BASE_URL +
        "Profiles/GetProfilesByProfileTypes";
      setStudentClassList(await GetByShortName(url, studentClassShortName));
      setSubjectList(await GetByShortName(url, subjectShortName));
    };

    fetchData();

    return () => clearTimeout(timer);
  }, []);

  const handleResetForm = () => {
    resetForm();
  };

  const {
    values,
    errors,
    handleChange,
    setErrors,
    setFieldValue,
    handleSubmit,
    handleBlur,
    resetForm,
    touched,
  } = useFormik({
    initialValues: bookFormValues,
    validationSchema: BookFormSchema,
    enableReinitialize: true,
    onSubmit: async (value) => {
      debugger;
      const url =
        import.meta.env.REACT_APP_STUDENT_BASE_URL + "Library/CreateOrEdit";

      const response = await Post(url, value);
      if (response) {
        resetForm();
        navigate("/dashboard/all-books");
      }
    },
  });
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
            <li>Add New Book</li>
          </ul>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>Add New Book</h3>
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
            <form className="new-added-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="bookName">Book Name *</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    id="bookName"
                    name="bookName"
                    value={values.bookName ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.bookName && errors.bookName && (
                    <small className="input-error-message">
                      {errors.bookName}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="subjectTypeProfileId">Subject *</label>
                  <select
                    className="select2 form-control"
                    id="subjectTypeProfileId"
                    name="subjectTypeProfileId"
                    value={values.subjectTypeProfileId ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option selected disabled>
                      Please Select Subject *
                    </option>
                    {subjectList.map((res) => {
                      return (
                        <option value={res?.profileId}>
                          {res?.profileName}
                        </option>
                      );
                    })}
                  </select>
                  {touched.subjectTypeProfileId && errors.subjectTypeProfileId && (
                    <small className="input-error-message">
                      {errors.subjectTypeProfileId}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="writerName">Writter Name *</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    id="writerName"
                    name="writerName"
                    value={values.writerName ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.writerName && errors.writerName && (
                    <small className="input-error-message">
                      {errors.writerName}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="classTypeProfileId">Class *</label>
                  <select
                    className="select2 form-control"
                    id="classTypeProfileId"
                    name="classTypeProfileId"
                    value={values.classTypeProfileId ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option selected disabled>
                      Please Select Class *
                    </option>
                    {studentClassList.map((res) => {
                      return (
                        <option value={res?.profileId}>
                          {res?.profileName}
                        </option>
                      );
                    })}
                  </select>
                  {touched.classTypeProfileId && errors.classTypeProfileId && (
                    <small className="input-error-message">
                      {errors.classTypeProfileId}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="idNo">ID No</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    id="idNo"
                    name="idNo"
                    value={values.idNo ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.idNo && errors.idNo && (
                    <small className="input-error-message">
                      {errors.idNo}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="publishingDate">Publishing Date *</label>
                  <input
                    type="date"
                    placeholder=""
                    className="form-control"
                    id="publishingDate"
                    name="publishingDate"
                    value={values.publishingDate ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.publishingDate && errors.publishingDate && (
                    <small className="input-error-message">
                      {errors.publishingDate}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="uploadDate">Uploade Date *</label>
                  <input
                    type="date"
                    placeholder=""
                    className="form-control"
                    id="uploadDate"
                    name="uploadDate"
                    value={values.uploadDate ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.uploadDate && errors.uploadDate && (
                    <small className="input-error-message">
                      {errors.uploadDate}
                    </small>
                  )}
                </div>
                <div className="col-md-3 d-none d-xl-block form-group"></div>
                <div className="col-12 form-group mg-t-8">
                  <button
                    type="submit"
                    className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    className="btn-fill-lg bg-blue-dark btn-hover-yellow"
                    onClick={handleResetForm}
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

export default AddBook;
