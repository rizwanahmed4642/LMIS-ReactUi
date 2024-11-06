import { Link } from "react-router-dom";
import "../../assets/css/datepicker.min.css";
import "../../assets/css/select2.min.css";

import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosInstance";
import { GetById, GetByShortName, Post } from "../../Services/student-service";
import {
  bloodGroupShortName,
  classSectionShortName,
  genderShortName,
  religionShortName,
  studentClassShortName,
} from "../../Constants/ShortNameConstants";

function AdmissionForm() {
  const [isLoading, setLoading] = useState(true);
  const [genderList, setGenderList] = useState([]);
  const [sectionList, setSectionList] = useState([]);
  const [religionList, setReligionList] = useState([]);
  const [bloodGroupList, setBloodGroupList] = useState([]);
  const [studentClassList, setStudentClassList] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const fetchData = async () => {
      const url =
        import.meta.env.REACT_APP_BASE_URL +
        "Profiles/GetProfilesByProfileTypes";
      setGenderList(await GetByShortName(url, genderShortName));
      setSectionList(await GetByShortName(url, classSectionShortName));
      setReligionList(await GetByShortName(url, religionShortName));
      setBloodGroupList(await GetByShortName(url, bloodGroupShortName));
      setStudentClassList(await GetByShortName(url, studentClassShortName));
    };

    fetchData();
  }, []);

  const [admissionForm, setAdmissionForm] = useState({
    id: null,
    firstName: null,
    lastName: null,
    genderTypeProfileId: null,
    dateOfBirth: null,
    email: null,
    password: null,
    roleShortName: "STUDNT",
    studentCreateOrEditDto: {
      studentId: null,
      rollNo: "",
      bloodGroupTypeProfileId: null,
      religionTypeProfileId: null,
      StudentClassTypeProfileId: null,
      StudentClassSectionTypeProfileId: null,
      admissionId: null,
      phoneNo: null,
      shortBio: null,
      StudentPhotoBase64: null,
    },
  });

  const uploadPhoto = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();

      reader.onloadend = function () {
        const base64String = reader.result; // This will be a Base64 string
        setAdmissionForm((prevData) => ({
          ...prevData,
          studentCreateOrEditDto: {
            ...prevData.studentCreateOrEditDto,
            StudentPhotoBase64: base64String,
          },
        }));
      };

      reader.readAsDataURL(file); // Read the file as a data URL (Base64)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      import.meta.env.REACT_APP_STUDENT_BASE_URL + "Students/CreateOrEdit";

      const response = await Post(url, admissionForm);
      debugger
      if (response) {
        setAdmissionForm({
          id: null,
          firstName: null,
          lastName: null,
          genderTypeProfileId: null,
          dateOfBirth: null,
          email: null,
          password: null,
          roleShortName: "STUDNT",
          studentCreateOrEditDto: {
            studentId: null,
            rollNo: null,
            bloodGroupTypeProfileId: null,
            religionTypeProfileId: null,
            StudentClassTypeProfileId: null,
            StudentClassSectionTypeProfileId: null,
            admissionId: null,
            phoneNo: null,
            shortBio: null,
            StudentPhotoBase64: null,
          },
        });
      }
  };

  const resetForm = () => {
    setAdmissionForm({
      id: null,
      firstName: null,
      lastName: null,
      genderTypeProfileId: null,
      dateOfBirth: null,
      email: null,
      password: null,
      roleShortName: "STUDNT",
      studentCreateOrEditDto: {
        studentId: null,
        rollNo: null,
        bloodGroupTypeProfileId: null,
        religionTypeProfileId: null,
        StudentClassTypeProfileId: null,
        StudentClassSectionTypeProfileId: null,
        admissionId: null,
        phoneNo: null,
        shortBio: null,
        StudentPhotoBase64: null,
      },
    });
  };

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
            <form className="new-added-form">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    value={admissionForm.firstName ?? ""}
                    onChange={(e) =>
                      setAdmissionForm((prevData) => ({
                        ...prevData,
                        firstName: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    value={admissionForm.lastName ?? ""}
                    onChange={(e) =>
                      setAdmissionForm((prevData) => ({
                        ...prevData,
                        lastName: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Gender *</label>
                  <select
                    className="select2 form-control"
                    value={admissionForm.genderTypeProfileId ?? ""}
                    onChange={(e) =>
                      setAdmissionForm((prevData) => ({
                        ...prevData,
                        genderTypeProfileId: e.target.value,
                      }))
                    }
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
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Date Of Birth *</label>
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    className="form-control air-datepicker"
                    data-position="bottom right"
                    value={admissionForm.dateOfBirth ?? ""}
                    onChange={(e) =>
                      setAdmissionForm((prevData) => ({
                        ...prevData,
                        dateOfBirth: e.target.value,
                      }))
                    }
                  />
                  <i className="far fa-calendar-alt"></i>
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Roll</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    value={admissionForm.studentCreateOrEditDto.rollNo ?? ""}
                    onChange={(e) =>
                      setAdmissionForm((prevState) => ({
                        ...prevState, // Preserve existing state
                        studentCreateOrEditDto: {
                          ...prevState.studentCreateOrEditDto, // Preserve existing studentCreateOrEditDto properties
                          rollNo: e.target.value, // Update rollNo
                        },
                      }))
                    }
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Blood Group *</label>
                  <select
                    className="select2 form-control"
                    value={
                      admissionForm.studentCreateOrEditDto
                        .bloodGroupTypeProfileId ?? ""
                    }
                    onChange={(e) =>
                      setAdmissionForm((prev) => ({
                        ...prev,
                        studentCreateOrEditDto: {
                          ...prev.studentCreateOrEditDto,
                          bloodGroupTypeProfileId: e.target.value,
                        },
                      }))
                    }
                  >
                    <option value="" disabled>Please Select Group *</option>
                    {bloodGroupList &&
                      bloodGroupList.length > 0 &&
                      bloodGroupList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Religion *</label>
                  <select
                    className="select2 form-control"
                    value={
                      admissionForm.studentCreateOrEditDto
                        .religionTypeProfileId ?? ""
                    }
                    onChange={(e) => {
                      setAdmissionForm((prev) => ({
                        ...prev,
                        studentCreateOrEditDto: {
                          ...prev.studentCreateOrEditDto,
                          religionTypeProfileId: e.target.value,
                        },
                      }));
                    }}
                  >
                    <option value="" disabled>Please Select Religion *</option>
                    {religionList &&
                      religionList.length > 0 &&
                      religionList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>E-Mail</label>
                  <input
                    type="email"
                    placeholder=""
                    className="form-control"
                    value={admissionForm.email ?? ""}
                    onChange={(e) =>
                      setAdmissionForm((prevData) => ({
                        ...prevData,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Class *</label>
                  <select
                    className="select2 form-control"
                    value={
                      admissionForm.studentCreateOrEditDto.StudentClassTypeProfileId ?? ""
                    }
                    onChange={(e) => {
                      setAdmissionForm((prev) => ({
                        ...prev,
                        studentCreateOrEditDto: {
                          ...prev.studentCreateOrEditDto,
                          StudentClassTypeProfileId: e.target.value,
                        },
                      }));
                    }}
                  >
                    <option value="" disabled>Please Select Class *</option>
                    {studentClassList &&
                      studentClassList.length > 0 &&
                      studentClassList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Section *</label>
                  <select
                    className="select2 form-control"
                    value={admissionForm.studentCreateOrEditDto.StudentClassSectionTypeProfileId ?? ""}
                    onChange={(e) => {
                      setAdmissionForm((prev) => ({
                        ...prev,
                        studentCreateOrEditDto: {
                          ...prev.studentCreateOrEditDto,
                          StudentClassSectionTypeProfileId: e.target.value,
                        },
                      }));
                    }}
                  >
                    <option value="" disabled>Please Select Section *</option>
                    {sectionList &&
                      sectionList.length > 0 &&
                      sectionList.map((item) => (
                        <option key={item?.profileId} value={item?.profileId}>
                          {item?.profileName}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Admission ID</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    value={
                      admissionForm.studentCreateOrEditDto.admissionId ?? ""
                    }
                    onChange={(e) => {
                      setAdmissionForm((prev) => ({
                        ...prev,
                        studentCreateOrEditDto: {
                          ...prev.studentCreateOrEditDto,
                          admissionId: e.target.value,
                        },
                      }));
                    }}
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    value={admissionForm.studentCreateOrEditDto.phoneNo ?? ""}
                    onChange={(e) => {
                      setAdmissionForm((prev) => ({
                        ...prev,
                        studentCreateOrEditDto: {
                          ...prev.studentCreateOrEditDto,
                          phoneNo: e.target.value,
                        },
                      }));
                    }}
                  />
                </div>
                <div className="col-lg-6 col-12 form-group">
                  <label>Short BIO</label>
                  <textarea
                    className="textarea form-control"
                    name="message"
                    id="form-message"
                    cols="10"
                    rows="9"
                    value={admissionForm.studentCreateOrEditDto.shortBio ?? ""}
                    onChange={(e) => {
                      setAdmissionForm((prev) => ({
                        ...prev,
                        studentCreateOrEditDto: {
                          ...prev.studentCreateOrEditDto,
                          shortBio: e.target.value,
                        },
                      }));
                    }}
                  ></textarea>
                </div>
                <div className="col-lg-6 col-12 form-group mg-t-30">
                  <label className="text-dark-medium">
                    Upload Student Photo (150px X 150px)
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    onChange={uploadPhoto}
                  />
                </div>
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
                    onClick={resetForm}
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

export default AdmissionForm;
