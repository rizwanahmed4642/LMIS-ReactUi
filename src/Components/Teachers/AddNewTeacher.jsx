import React, { useEffect, useState } from "react";
import { GetByQueryId, GetByShortName, Post } from "../../Services/student-service";
import {
  bloodGroupShortName,
  classSectionShortName,
  genderShortName,
  religionShortName,
  studentClassShortName,
  subjectShortName,
} from "../../Constants/ShortNameConstants";
import { TeacherFormSchema } from "../../Schemas";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { TeacherFormInitialValue } from "../../Schemas/SchemaInitialValues";

function AddNewTeacher() {
  const [isLoading, setLoading] = useState(true);
  const [genderList, setGenderList] = useState([]);
  const [sectionList, setSectionList] = useState([]);
  const [religionList, setReligionList] = useState([]);
  const [bloodGroupList, setBloodGroupList] = useState([]);
  const [studentClassList, setStudentClassList] = useState([]);
  const [subjectList, setSubjectList] = useState([]); 
  const [teacherFormValues, setTeacherFormValues] = useState({
    id: null,
    firstName: "",
    lastName: "",
    genderTypeProfileId: "",
    dateOfBirth: "",
    email: "",
    password: "",
    roleShortName: "TACHR",
    teacherCreateOrEditDto: {
      teacherId: null,
      idNo: "",
      bloodGroupTypeProfileId: "",
      religionTypeProfileId: "",
      classTypeProfileId: "",
      sectionTypeProfileId: "",
      subjectTypeProfileId: "",
      salary: 0,
      address: "",
      phoneNo: "",
      shortBio: "",
      teacherPhotoBase64: "",
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
          "Teachers/GetTeacherById";
        const singleRecord = await GetByQueryId(url, id);
        if (singleRecord) {
          const formValue = TeacherFormInitialValue(singleRecord);
          setTeacherFormValues(formValue);
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
      setSubjectList(await GetByShortName(url, subjectShortName));
    };

    fetchData();

    return () => clearTimeout(timer);
  }, []);

  const uploadPhoto = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();

      // Validate if the file is an image
      if (!file.type.startsWith("image/")) {
        // If not an image, set an error message using setErrors
        setErrors({
          teacherCreateOrEditDto: {
            teacherPhotoBase64: "File should only contain a photo", // Custom error message
          },
        });
        return; // Exit early if the file is invalid
      }

      reader.onloadend = function () {
        const base64String = reader.result; // This will be a Base64 string

        // Update the Formik field value for TeacherPhotoBase64
        setFieldValue(
          "teacherCreateOrEditDto.teacherPhotoBase64",
          base64String
        );

        teacherFormValues.teacherCreateOrEditDto.teacherPhotoBase64 =
          base64String;
      };

      reader.readAsDataURL(file); // Read the file as a data URL (Base64)
    }
  };

  
  const handleResetForm = () => {
    resetForm();
    document.getElementById("teacherPhotoBase64").value = "";
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
    initialValues: teacherFormValues,
    validationSchema: TeacherFormSchema,
    enableReinitialize: true,
    onSubmit: async (value) => {
      const url =
        import.meta.env.REACT_APP_STUDENT_BASE_URL + "Teachers/CreateOrEdit";

      const response = await Post(url, value);
      if (response) {
        resetForm();
        debugger
        document.getElementById("teacherPhotoBase64").value = "";
        navigate("/dashboard/all-teachers");
      }
    },
  });

  return (
    <>
      {isLoading && <div id="preloader"></div>}
      <div className="dashboard-content-one">
        <div className="breadcrumbs-area">
          <h3>Teacher</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Add New Teacher</li>
          </ul>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>Add New Teacher</h3>
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
                  <label>First Name *</label>
                  <input
                    type="text"
                    placeholder=""
                    id="firstName"
                    name="firstName"
                    value={values.firstName ?? ""}
                    className="form-control"
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
                  <label>Last Name *</label>
                  <input
                    type="text"
                    placeholder=""
                    id="lastName"
                    name="lastName"
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
                  <label>Gender *</label>
                  <select
                    className="select2 form-control"
                    value={values.genderTypeProfileId ?? ""}
                    id="genderTypeProfileId"
                    name="genderTypeProfileId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Please Select Gender *</option>
                    {genderList &&
                      genderList.length > 0 &&
                      genderList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                  {touched.genderTypeProfileId && errors.genderTypeProfileId && (
                    <small className="input-error-message">
                      {errors.genderTypeProfileId}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Date Of Birth *</label>
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    className="form-control air-datepicker"
                    id="dateOfBirth"
                    name="dateOfBirth"
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
                  <label>ID No</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    value={values.teacherCreateOrEditDto.idNo ?? ""}
                    id="teacherCreateOrEditDto.idNo"
                    name="teacherCreateOrEditDto.idNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                                    {touched?.teacherCreateOrEditDto?.idNo && errors?.teacherCreateOrEditDto?.idNo && (
                    <small className="input-error-message">
                      {errors?.teacherCreateOrEditDto?.idNo}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Blood Group *</label>
                  <select
                    className="select2 form-control"
                    value={values.teacherCreateOrEditDto.bloodGroupTypeProfileId ?? ""}
                    id="teacherCreateOrEditDto.bloodGroupTypeProfileId"
                    name="teacherCreateOrEditDto.bloodGroupTypeProfileId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Please Select Group *</option>
                    {bloodGroupList &&
                      bloodGroupList.length > 0 &&
                      bloodGroupList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                  {touched?.teacherCreateOrEditDto?.bloodGroupTypeProfileId &&
                    errors?.teacherCreateOrEditDto?.bloodGroupTypeProfileId && (
                      <small className="input-error-message">
                        {
                          errors?.teacherCreateOrEditDto
                            ?.bloodGroupTypeProfileId
                        }
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Religion *</label>
                  <select
                    className="select2 form-control"
                    value={values.teacherCreateOrEditDto.religionTypeProfileId ?? ""}
                    id="teacherCreateOrEditDto.religionTypeProfileId"
                    name="teacherCreateOrEditDto.religionTypeProfileId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Please Select Religion *</option>
                    {religionList &&
                      religionList.length > 0 &&
                      religionList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                  {touched?.teacherCreateOrEditDto?.religionTypeProfileId &&
                    errors?.teacherCreateOrEditDto?.religionTypeProfileId && (
                      <small className="input-error-message">
                        {
                          errors?.teacherCreateOrEditDto
                            ?.religionTypeProfileId
                        }
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>E-Mail</label>
                  <input
                    type="email"
                    placeholder=""
                    className="form-control"
                    value={values.email ?? ""}
                    id="email"
                    name="email"
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
                  <label>Class *</label>
                  <select
                    className="select2 form-control"
                    value={values.teacherCreateOrEditDto.classTypeProfileId ?? ""}
                    id="teacherCreateOrEditDto.classTypeProfileId"
                    name="teacherCreateOrEditDto.classTypeProfileId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Please Select Class *</option>
                    {studentClassList &&
                      studentClassList.length > 0 &&
                      studentClassList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                  {touched?.teacherCreateOrEditDto?.classTypeProfileId &&
                    errors?.teacherCreateOrEditDto?.classTypeProfileId && (
                      <small className="input-error-message">
                        {
                          errors?.teacherCreateOrEditDto
                            ?.classTypeProfileId
                        }
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Section *</label>
                  <select
                    className="select2 form-control"
                    value={values.teacherCreateOrEditDto.sectionTypeProfileId ?? ""}
                    id="teacherCreateOrEditDto.sectionTypeProfileId"
                    name="teacherCreateOrEditDto.sectionTypeProfileId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Please Select Section *</option>
                    {sectionList &&
                      sectionList.length > 0 &&
                      sectionList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                  {touched?.teacherCreateOrEditDto?.sectionTypeProfileId &&
                    errors?.teacherCreateOrEditDto?.sectionTypeProfileId && (
                      <small className="input-error-message">
                        {
                          errors?.teacherCreateOrEditDto
                            ?.sectionTypeProfileId
                        }
                      </small>
                    )}
                </div>

                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Subject *</label>
                  <select
                    className="select2 form-control"
                    value={values.teacherCreateOrEditDto.subjectTypeProfileId ?? ""}
                    id="teacherCreateOrEditDto.subjectTypeProfileId"
                    name="teacherCreateOrEditDto.subjectTypeProfileId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Please Select Section *</option>
                    {subjectList &&
                      subjectList.length > 0 &&
                      subjectList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                  {touched?.teacherCreateOrEditDto?.subjectTypeProfileId &&
                    errors?.teacherCreateOrEditDto?.subjectTypeProfileId && (
                      <small className="input-error-message">
                        {
                          errors?.teacherCreateOrEditDto
                            ?.subjectTypeProfileId
                        }
                      </small>
                    )}
                </div>

                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Salary *</label>
                  <input
                    type="number"
                    placeholder=""
                    className="form-control"
                    value={values.teacherCreateOrEditDto.salary ?? ""}
                    id="teacherCreateOrEditDto.salary"
                    name="teacherCreateOrEditDto.salary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                                    {touched?.teacherCreateOrEditDto?.salary &&
                    errors?.teacherCreateOrEditDto?.salary && (
                      <small className="input-error-message">
                        {
                          errors?.teacherCreateOrEditDto
                            ?.salary
                        }
                      </small>
                    )}
                </div>

                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    value={values.teacherCreateOrEditDto.address ?? ""}
                    id="teacherCreateOrEditDto.address"
                    name="teacherCreateOrEditDto.address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                                    {touched?.teacherCreateOrEditDto?.address &&
                    errors?.teacherCreateOrEditDto?.address && (
                      <small className="input-error-message">
                        {
                          errors?.teacherCreateOrEditDto
                            ?.address
                        }
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    value={values.teacherCreateOrEditDto.phoneNo ?? ""}
                    id="teacherCreateOrEditDto.phoneNo"
                    name="teacherCreateOrEditDto.phoneNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                                    {touched?.teacherCreateOrEditDto?.phoneNo &&
                    errors?.teacherCreateOrEditDto?.phoneNo && (
                      <small className="input-error-message">
                        {
                          errors?.teacherCreateOrEditDto
                            ?.phoneNo
                        }
                      </small>
                    )}
                </div>
                <div className="col-lg-6 col-12 form-group">
                  <label>Short BIO</label>
                  <textarea
                    className="textarea form-control"
                    name="teacherCreateOrEditDto.shortBio"
                    id="teacherCreateOrEditDto.shortBio"
                    cols="10"
                    rows="9"
                    value={values.teacherCreateOrEditDto.shortBio ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                                    {touched?.teacherCreateOrEditDto?.shortBio &&
                    errors?.teacherCreateOrEditDto?.shortBio && (
                      <small className="input-error-message">
                        {
                          errors?.teacherCreateOrEditDto
                            ?.shortBio
                        }
                      </small>
                    )}
                </div>
                <div className="col-lg-6 col-12 form-group mg-t-30">
                  <label className="text-dark-medium">
                    Upload Teacher Photo (150px X 150px)
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    name="teacherCreateOrEditDto.teacherPhotoBase64"
                    onChange={(e) => uploadPhoto(e)}
                    onBlur={handleBlur}
                    id="teacherPhotoBase64"
                  />
                  {touched?.teacherCreateOrEditDto?.teacherPhotoBase64 &&
                    errors?.teacherCreateOrEditDto?.teacherPhotoBase64 && (
                      <small className="input-error-message">
                        {
                          errors?.teacherCreateOrEditDto
                            ?.teacherPhotoBase64
                        }
                      </small>
                    )}


{teacherFormValues &&
                  teacherFormValues.teacherCreateOrEditDto
                    ?.teacherPhotoBase64 ? (
                    <img
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        boxShadow: "1px 4px 7px 3px",
                      }}
                      src={
                        teacherFormValues.teacherCreateOrEditDto
                          .teacherPhotoBase64
                      }
                      alt="Teacher"
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

export default AddNewTeacher;
