import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { ParentFormSchema } from "../../Schemas";
import { GetByQueryId, GetByShortName, Post } from "../../Services/student-service";
import {
  bloodGroupShortName,
  genderShortName,
  religionShortName,
} from "../../Constants/ShortNameConstants";
import { useNavigate, useParams } from "react-router-dom";
import { ParentFormInitialValue } from "../../Schemas/SchemaInitialValues";

function AddParent() {
  const [isLoading, setIsLoading] = useState(true);
  const [genderList, setGenderList] = useState([]);
  const [religionList, setReligionList] = useState([]);
  const [bloodGroupList, setBloodGroupList] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const [parentFormValues, setParentFormValues] = useState({
    id: null,
    firstName: "",
    lastName: "",
    genderTypeProfileId: "",
    email: "",
    roleShortName: "PARENT",
    parentCreateOrEditDto: {
      parentId: null,
      occupation: "",
      motherName: "",
      idno: "",
      bloodGroupTypeProfileId: "",
      religionTypeProfileId: "",
      address: "",
      phoneNo: "",
      shortBio: "",
      parentPhotoBase64: "",
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const fetchData = async () => {
      if (id) {
        const url =
          import.meta.env.REACT_APP_STUDENT_BASE_URL +
          "Parents/GetSingleparentRecord";
        const singleRecord = await GetByQueryId(url, id);
        debugger;
        if (singleRecord) {
          const formValue = ParentFormInitialValue(singleRecord);
          setParentFormValues(formValue);
        }
      }

      const url =
        import.meta.env.REACT_APP_BASE_URL +
        "Profiles/GetProfilesByProfileTypes";
      setGenderList(await GetByShortName(url, genderShortName));
      setReligionList(await GetByShortName(url, religionShortName));
      setBloodGroupList(await GetByShortName(url, bloodGroupShortName));
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
          parentCreateOrEditDto: {
            parentPhotoBase64: "File should only contain a photo", // Custom error message
          },
        });
        return; // Exit early if the file is invalid
      }

      reader.onloadend = function () {
        const base64String = reader.result; // This will be a Base64 string

        // Update the Formik field value for parentCreateOrEditDto
        setFieldValue("parentCreateOrEditDto.parentPhotoBase64", base64String);

        parentFormValues.parentCreateOrEditDto.parentPhotoBase64 = base64String;
      };

      reader.readAsDataURL(file); // Read the file as a data URL (Base64)
    }
  };

  const handleResetForm = () => {
    resetForm();
    document.getElementById("parentPhotoBase64").value = "";
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    setFieldValue,
    setErrors,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    initialValues: parentFormValues,
    validationSchema: ParentFormSchema,
    enableReinitialize: true,
    onSubmit: async (value) => {
      const url =
        import.meta.env.REACT_APP_STUDENT_BASE_URL + "Parents/CreateOrEdit";
      const response = await Post(url, value);

      if (response) {
        resetForm();
        document.getElementById("parentPhotoBase64").value = "";
        navigate("/dashboard/all-parents");
      }
    },
  });

  return (
    <>
      {isLoading && <div id="preloader"></div>}
      <div className="dashboard-content-one">
        <div className="breadcrumbs-area">
          <h3>Parents</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Add New Parents</li>
          </ul>
        </div>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>Add New Parents</h3>
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
            <form className="new-added-form">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="firstName">First Name (Father) *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={values.firstName ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="form-control"
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
                    id="lastName"
                    name="lastName"
                    value={values.lastName ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="form-control"
                  />
                  {touched.lastName && errors.lastName && (
                    <small className="input-error-message">
                      {errors.lastName}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="motherName">Mother Name *</label>
                  <input
                    type="text"
                    id="motherName"
                    name="parentCreateOrEditDto.motherName"
                    value={values?.parentCreateOrEditDto?.motherName ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="form-control"
                  />
                  {touched?.parentCreateOrEditDto?.motherName && errors?.parentCreateOrEditDto?.motherName && (
                    <small className="input-error-message">
                      {errors.parentCreateOrEditDto.motherName}
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
                    <option value="">Please Select Gender *</option>
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
                  <label htmlFor="occupation">
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="parentCreateOrEditDto.occupation"
                    value={values.parentCreateOrEditDto.occupation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="form-control"
                  />
                  {touched?.parentCreateOrEditDto?.occupation &&
                    errors?.parentCreateOrEditDto?.occupation && (
                      <small className="input-error-message">
                        {errors?.parentCreateOrEditDto?.occupation}
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="idno">ID No</label>
                  <input
                    type="text"
                    id="idno"
                    name="parentCreateOrEditDto.idno"
                    value={values?.parentCreateOrEditDto?.idno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="form-control"
                  />
                  {touched?.parentCreateOrEditDto?.idno &&
                    errors?.parentCreateOrEditDto?.idno && (
                      <small className="input-error-message">
                        {errors?.parentCreateOrEditDto?.idno}
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="bloodGroupTypeProfileId">
                    Blood Group *
                  </label>
                  <select
                    className="select2 form-control"
                    id="bloodGroupTypeProfileId"
                    name="parentCreateOrEditDto.bloodGroupTypeProfileId"
                    value={
                      values?.parentCreateOrEditDto?.bloodGroupTypeProfileId
                    }
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
                  {touched?.parentCreateOrEditDto?.bloodGroupTypeProfileId &&
                    errors?.parentCreateOrEditDto?.bloodGroupTypeProfileId && (
                      <small className="input-error-message">
                        {errors?.parentCreateOrEditDto?.bloodGroupTypeProfileId}
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="religionTypeProfileId">
                    Religion *
                  </label>
                  <select
                    className="select2 form-control"
                    id="religionTypeProfileId"
                    name="parentCreateOrEditDto.religionTypeProfileId"
                    value={values?.parentCreateOrEditDto?.religionTypeProfileId}
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
                  {touched?.parentCreateOrEditDto?.religionTypeProfileId &&
                    errors?.parentCreateOrEditDto?.religionTypeProfileId && (
                      <small className="input-error-message">
                        {errors?.parentCreateOrEditDto?.religionTypeProfileId}
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="email">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="form-control"
                  />
                  {touched.email && errors.email && (
                    <small className="input-error-message">
                      {errors.email}
                    </small>
                  )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="parentCreateOrEditDto.address"
                    value={values?.parentCreateOrEditDto?.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="form-control"
                  />
                  {touched?.parentCreateOrEditDto?.address &&
                    errors?.parentCreateOrEditDto?.address && (
                      <small className="input-error-message">
                        {errors?.parentCreateOrEditDto?.address}
                      </small>
                    )}
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="phoneNo">Phone</label>
                  <input
                    type="text"
                    id="phoneNo"
                    name="parentCreateOrEditDto.phoneNo"
                    value={values?.parentCreateOrEditDto?.phoneNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="form-control"
                  />
                  {touched?.parentCreateOrEditDto?.phoneNo &&
                    errors?.parentCreateOrEditDto?.phoneNo && (
                      <small className="input-error-message">
                        {errors?.parentCreateOrEditDto?.phoneNo}
                      </small>
                    )}
                </div>
                {/* <div className="col-md-6 d-none d-xl-block"></div> */}
                <div className="col-lg-6 col-12 form-group">
                  <label htmlFor="shortBio">Short BIO</label>
                  <textarea
                    className="textarea form-control"
                    id="shortBio"
                    name="parentCreateOrEditDto.shortBio"
                    value={values?.parentCreateOrEditDto?.shortBio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    cols="10"
                    rows="9"
                  ></textarea>
                  {touched?.parentCreateOrEditDto?.shortBio &&
                    errors?.parentCreateOrEditDto?.shortBio && (
                      <small className="input-error-message">
                        {errors?.parentCreateOrEditDto?.shortBio}
                      </small>
                    )}
                </div>
                <div className="col-lg-6 col-12 form-group mg-t-30">
                  <label htmlFor="parentPhotoBase64" className="text-dark-medium">
                    Upload Parent Photo (150px X 150px)
                  </label>
                  <input
                    type="file"
                    id="parentPhotoBase64"
                    name="parentCreateOrEditDto.parentPhotoBase64"
                    onChange={(e) => uploadPhoto(e)}
                    onBlur={handleBlur}
                    className="form-control-file"
                  />

                  {touched?.parentCreateOrEditDto?.parentPhotoBase64 &&
                    errors?.parentCreateOrEditDto?.parentPhotoBase64 && (
                      <small className="input-error-message">
                        {errors?.parentCreateOrEditDto?.parentPhotoBase64}
                      </small>
                    )}

                  {parentFormValues &&
                  parentFormValues.parentCreateOrEditDto
                    ?.parentPhotoBase64 ? (
                    <img
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        boxShadow: "1px 4px 7px 3px",
                      }}
                      src={
                        parentFormValues.parentCreateOrEditDto
                          .parentPhotoBase64
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

export default AddParent;
