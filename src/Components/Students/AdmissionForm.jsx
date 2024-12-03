import { Link, useNavigate, useParams } from "react-router-dom";
import "../../assets/css/datepicker.min.css";
import "../../assets/css/select2.min.css";
import React, { useState, useEffect } from "react";
import {
  Get,
  GetByQueryId,
  GetByShortName,
  Post,
} from "../../Services/student-service";
import {
  bloodGroupShortName,
  classSectionShortName,
  genderShortName,
  religionShortName,
  studentClassShortName,
} from "../../Constants/ShortNameConstants";
import { ErrorMessage, useFormik } from "formik";
import { StudentAdmissionFormSchema } from "../../Schemas";
import { StudentAdmissionForminitialValue } from "../../Schemas/SchemaInitialValues";

function AdmissionForm() {
  const [isLoading, setLoading] = useState(true);
  const [genderList, setGenderList] = useState([]);
  const [sectionList, setSectionList] = useState([]);
  const [religionList, setReligionList] = useState([]);
  const [bloodGroupList, setBloodGroupList] = useState([]);
  const [studentClassList, setStudentClassList] = useState([]);
  const [parentList, setParentList] = useState([]);
  const [admissionFormValues, setAdmissionFormValues] = useState({
    id: null,
    firstName: "",
    lastName: "",
    genderTypeProfileId: "",
    dateOfBirth: "",
    email: "",
    password: "",
    roleShortName: "STUDNT",
    studentCreateOrEditDto: {
      studentId: null,
      parentId: null,
      rollNo: "",
      bloodGroupTypeProfileId: "",
      religionTypeProfileId: "",
      StudentClassTypeProfileId: "",
      StudentClassSectionTypeProfileId: "",
      admissionId: "",
      phoneNo: "",
      shortBio: "",
      StudentPhotoBase64: "",
    },
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const fetchData = async () => {
      if (id) {
        const url =
          import.meta.env.REACT_APP_STUDENT_BASE_URL +
          "Students/GetStudentsById";
        const singleRecord = await GetByQueryId(url, id);
        debugger;
        if (singleRecord) {
          const formValue = StudentAdmissionForminitialValue(singleRecord);
          setAdmissionFormValues(formValue);
        }
      }

      const url =
        import.meta.env.REACT_APP_BASE_URL +
        "Profiles/GetProfilesByProfileTypes";
      setGenderList(await GetByShortName(url, genderShortName));
      setSectionList(await GetByShortName(url, classSectionShortName));
      setReligionList(await GetByShortName(url, religionShortName));
      setBloodGroupList(await GetByShortName(url, bloodGroupShortName));
      setStudentClassList(await GetByShortName(url, studentClassShortName));
      setParentList(await Get(import.meta.env.REACT_APP_STUDENT_BASE_URL + "Parents/GetParentName"));
    };

    fetchData();
  }, []);

  const uploadPhoto = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();

      // Validate if the file is an image
      if (!file.type.startsWith("image/")) {
        // If not an image, set an error message using setErrors
        setErrors({
          studentCreateOrEditDto: {
            StudentPhotoBase64: "File should only contain a photo", // Custom error message
          },
        });
        return; // Exit early if the file is invalid
      }

      reader.onloadend = function () {
        const base64String = reader.result; // This will be a Base64 string

        // Update the Formik field value for StudentPhotoBase64
        setFieldValue(
          "studentCreateOrEditDto.StudentPhotoBase64",
          base64String
        );

        admissionFormValues.studentCreateOrEditDto.StudentPhotoBase64 =
          base64String;
      };

      reader.readAsDataURL(file); // Read the file as a data URL (Base64)
    }
  };

  const handleResetForm = () => {
    resetForm();
    document.getElementById("StudentPhotoBase64").value = "";
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
    initialValues: admissionFormValues,
    validationSchema: StudentAdmissionFormSchema,
    enableReinitialize: true,
    onSubmit: async (value) => {
      const url =
        import.meta.env.REACT_APP_STUDENT_BASE_URL + "Students/CreateOrEdit";

      const response = await Post(url, value);
      if (response) {
        resetForm();
        document.getElementById("StudentPhotoBase64").value = "";
        navigate("/dashboard/all-students");
      }
    },
  });
  return (
    <>
      {isLoading && <div id="preloader"></div>}

      <div className="dashboard-content-one">
        <div className="breadcrumbs-area">
          <h3>Students</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Student Admit Form</li>
          </ul>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>Add New Students</h3>
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
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={values.firstName ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.firstName && errors.firstName && (
                    <small className="input-error-message">
                      {errors.firstName}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    placeholder=""
                    name="lastName"
                    id="lastName"
                    className="form-control"
                    value={values.lastName ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lastName && errors.lastName && (
                    <small className="input-error-message">
                      {errors.lastName}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="genderTypeProfileId">Gender *</label>
                  <select
                    className="select2 form-control"
                    id="genderTypeProfileId"
                    name="genderTypeProfileId"
                    value={values.genderTypeProfileId ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>
                      Please Select Gender *
                    </option>
                    {genderList &&
                      genderList.length > 0 &&
                      genderList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                  {touched.genderTypeProfileId &&
                    errors.genderTypeProfileId && (
                      <small className="input-error-message">
                        {errors.genderTypeProfileId}
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="dateOfBirth">Date Of Birth *</label>
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    className="form-control air-datepicker"
                    data-position="bottom right"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={values.dateOfBirth ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <i className="far fa-calendar-alt"></i>

                  {touched.dateOfBirth && errors.dateOfBirth && (
                    <small className="input-error-message">
                      {errors.dateOfBirth}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="parentId">Parent *</label>
                  <select
                    className="select2 form-control"
                    id="parentId"
                    name="studentCreateOrEditDto.parentId"
                    value={
                      values.studentCreateOrEditDto.parentId
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>
                      Please Select Parent *
                    </option>
                    {parentList &&
                      parentList.length > 0 &&
                      parentList.map((item) => (
                        <option key={item?.parentId} value={item?.parentId}>
                          {item?.name}
                        </option>
                      ))}
                  </select>
                  {touched?.studentCreateOrEditDto?.parentId &&
                    errors?.studentCreateOrEditDto?.parentId && (
                      <small className="input-error-message">
                        {
                          errors?.studentCreateOrEditDto
                            ?.parentId
                        }
                      </small>
                    )}
                </div>

                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="rollNo">Roll</label>
                  <input
                    type="text"
                    placeholder=""
                    name="studentCreateOrEditDto.rollNo"
                    id="rollNo"
                    className="form-control"
                    value={values.studentCreateOrEditDto.rollNo ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched?.studentCreateOrEditDto?.rollNo &&
                    errors?.studentCreateOrEditDto?.rollNo && (
                      <small className="input-error-message">
                        {errors?.studentCreateOrEditDto?.rollNo}
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="bloodGroupTypeProfileId">Blood Group *</label>
                  <select
                    className="select2 form-control"
                    id="bloodGroupTypeProfileId"
                    name="studentCreateOrEditDto.bloodGroupTypeProfileId"
                    value={
                      values.studentCreateOrEditDto.bloodGroupTypeProfileId
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>
                      Please Select Group *
                    </option>
                    {bloodGroupList &&
                      bloodGroupList.length > 0 &&
                      bloodGroupList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                  {touched?.studentCreateOrEditDto?.bloodGroupTypeProfileId &&
                    errors?.studentCreateOrEditDto?.bloodGroupTypeProfileId && (
                      <small className="input-error-message">
                        {
                          errors?.studentCreateOrEditDto
                            ?.bloodGroupTypeProfileId
                        }
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="religionTypeProfileId">Religion *</label>
                  <select
                    className="select2 form-control"
                    id="religionTypeProfileId"
                    name="studentCreateOrEditDto.religionTypeProfileId"
                    value={values.studentCreateOrEditDto.religionTypeProfileId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>
                      Please Select Religion *
                    </option>
                    {religionList &&
                      religionList.length > 0 &&
                      religionList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                  {touched?.studentCreateOrEditDto?.religionTypeProfileId &&
                    errors?.studentCreateOrEditDto?.religionTypeProfileId && (
                      <small className="input-error-message">
                        {errors?.studentCreateOrEditDto?.religionTypeProfileId}
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="email">E-Mail</label>
                  <input
                    type="email"
                    placeholder=""
                    id="email"
                    name="email"
                    className="form-control"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <small className="input-error-message">
                      {errors.email}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="StudentClassTypeProfileId">Class *</label>
                  <select
                    className="select2 form-control"
                    id="StudentClassTypeProfileId"
                    name="studentCreateOrEditDto.StudentClassTypeProfileId"
                    value={
                      values.studentCreateOrEditDto.StudentClassTypeProfileId ??
                      ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>
                      Please Select Class *
                    </option>
                    {studentClassList &&
                      studentClassList.length > 0 &&
                      studentClassList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                  {touched?.studentCreateOrEditDto?.StudentClassTypeProfileId &&
                    errors?.studentCreateOrEditDto
                      ?.StudentClassTypeProfileId && (
                      <small className="input-error-message">
                        {
                          errors?.studentCreateOrEditDto
                            ?.StudentClassTypeProfileId
                        }
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="StudentClassSectionTypeProfileId">
                    Section *
                  </label>
                  <select
                    className="select2 form-control"
                    id="StudentClassSectionTypeProfileId"
                    name="studentCreateOrEditDto.StudentClassSectionTypeProfileId"
                    value={
                      values.studentCreateOrEditDto
                        .StudentClassSectionTypeProfileId ?? ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>
                      Please Select Section *
                    </option>
                    {sectionList &&
                      sectionList.length > 0 &&
                      sectionList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                  {touched?.studentCreateOrEditDto
                    ?.StudentClassSectionTypeProfileId &&
                    errors?.studentCreateOrEditDto
                      ?.StudentClassSectionTypeProfileId && (
                      <small className="input-error-message">
                        {
                          errors?.studentCreateOrEditDto
                            ?.StudentClassSectionTypeProfileId
                        }
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="admissionId">Admission ID</label>
                  <input
                    type="text"
                    placeholder=""
                    id="admissionId"
                    name="studentCreateOrEditDto.admissionId"
                    className="form-control"
                    value={values.studentCreateOrEditDto.admissionId ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched?.studentCreateOrEditDto?.admissionId &&
                    errors?.studentCreateOrEditDto?.admissionId && (
                      <small className="input-error-message">
                        {errors?.studentCreateOrEditDto?.admissionId}
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="phoneNo">Phone</label>
                  <input
                    type="text"
                    placeholder=""
                    id="phoneNo"
                    name="studentCreateOrEditDto.phoneNo"
                    className="form-control"
                    value={values.studentCreateOrEditDto.phoneNo ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched?.studentCreateOrEditDto?.phoneNo &&
                    errors?.studentCreateOrEditDto?.phoneNo && (
                      <small className="input-error-message">
                        {errors?.studentCreateOrEditDto?.phoneNo}
                      </small>
                    )}
                </div>
                <div className="col-12 form-group"></div>
                <div className="col-lg-6 col-12 form-group">
                  <label htmlFor="shortBio">Short BIO</label>
                  <textarea
                    className="textarea form-control"
                    name="studentCreateOrEditDto.shortBio"
                    id="shortBio"
                    cols="10"
                    rows="9"
                    value={values.studentCreateOrEditDto.shortBio ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  {touched?.studentCreateOrEditDto?.shortBio &&
                    errors?.studentCreateOrEditDto?.shortBio && (
                      <small className="input-error-message">
                        {errors?.studentCreateOrEditDto?.shortBio}
                      </small>
                    )}
                </div>
                <div className="col-lg-6 col-12 form-group mg-t-30">
                  <label
                    className="text-dark-medium"
                    htmlFor="StudentPhotoBase64"
                  >
                    Upload Student Photo (150px X 150px)
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="StudentPhotoBase64"
                    name="studentCreateOrEditDto.StudentPhotoBase64"
                    onChange={(e) => uploadPhoto(e)}
                    onBlur={handleBlur}
                  />
                  {touched?.studentCreateOrEditDto?.StudentPhotoBase64 &&
                    errors?.studentCreateOrEditDto?.StudentPhotoBase64 && (
                      <small className="input-error-message">
                        {errors?.studentCreateOrEditDto?.StudentPhotoBase64}
                      </small>
                    )}

                  {admissionFormValues &&
                  admissionFormValues.studentCreateOrEditDto
                    ?.StudentPhotoBase64 ? (
                    <img
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        boxShadow: "1px 4px 7px 3px",
                      }}
                      src={
                        admissionFormValues.studentCreateOrEditDto
                          .StudentPhotoBase64
                      }
                      alt="Student"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-12 form-group mg-t-8">
                  <button
                    type="submit"
                    className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                  {!id && (
                    <button
                      type="reset"
                      className="btn-fill-lg bg-blue-dark btn-hover-yellow"
                      onClick={handleResetForm}
                    >
                      Reset
                    </button>
                  )}
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

export default AdmissionForm;
