import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GetByQueryId } from "../../Services/student-service";
import html2pdf from "html2pdf.js";

function StudentDetail() {
  const [isLoading, setLoading] = useState(true);
  const [student, setStudent] = useState();
  const studentId = useParams("id");
  const navigate = useNavigate();
  useEffect(() => {
    const url = import.meta.env.REACT_APP_STUDENT_BASE_URL + "Students/GetSingleStudentForView";
    debugger
    const FetchData = async () => {
      if (studentId) {
        setStudent(await GetByQueryId(url,studentId.id));
      } else {
        navigate("/dashboard")
      }
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    FetchData();
    console.log(student)
  }, []);

  const gendratePdf = () => {
    const element = document.querySelector("#student-detail");
    html2pdf(element)
  }

  return (
    <>
      {isLoading && <div id="preloader"></div>}
      {
       student? <div className="dashboard-content-one">
       <div className="breadcrumbs-area">
         <h3>Students</h3>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>Student Details</li>
         </ul>
       </div>
       <div className="card height-auto">
         <div className="card-body">
           <div className="heading-layout1">
             <div className="item-title">
               <h3>About Me</h3>
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
                 <Link className="dropdown-item" to={`/dashboard/admission-form/${studentId?.id}`}>
                   <i className="fas fa-cogs text-dark-pastel-green"></i>Edit
                 </Link>
                 <a className="dropdown-item" href="#">
                   <i className="fas fa-redo-alt text-orange-peel"></i>Refresh
                 </a>
               </div>
             </div>
           </div>
           <div className="single-info-details" id="student-detail">
             <div className="item-img">
               <img src={student?.studentPhotoBase64} alt="student" />
             </div>
             <div className="item-content">
               <div className="header-inline item-header">
                 <h3 className="text-dark-medium font-medium">Jessia Rose</h3>
                 <div className="header-elements" id="student-detail-button">
                   <ul>
                     <li>
                       <Link  to={`/dashboard/admission-form/${studentId?.id}`}>
                         <i className="far fa-edit"></i>
                       </Link>
                     </li>
                     <li>
                       <a onClick={gendratePdf}>
                         <i className="fas fa-print"></i>
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fas fa-download"></i>
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
               <p>
                 { student?.shortBio }
                 {/* Aliquam erat volutpat. Curabiene natis massa sedde lacu
                 stiquen sodale word moun taiery.Aliquam erat volutpaturabiene
                 natis massa sedde sodale word moun taiery. */}
               </p>
               <div className="info-table table-responsive">
                 <table className="table text-nowrap">
                   <tbody>
                     <tr>
                       <td>Name:</td>
                       <td className="font-medium text-dark-medium">
                         {student?.firstName + " " + student?.lastName}
                       </td>
                     </tr>
                     <tr>
                       <td>Gender:</td>
                       <td className="font-medium text-dark-medium">{student?.gender}</td>
                     </tr>
                     <tr>
                       <td>Father Name:</td>
                       <td className="font-medium text-dark-medium">
                         Not Implemented Yet
                       </td>
                     </tr>
                     <tr>
                       <td>Mother Name:</td>
                       <td className="font-medium text-dark-medium">
                         Not Implemented Yet
                       </td>
                     </tr>
                     <tr>
                       <td>Date Of Birth:</td>
                       <td className="font-medium text-dark-medium">
                         {student?.dateOfBirth}
                       </td>
                     </tr>
                     <tr>
                       <td>Religion:</td>
                       <td className="font-medium text-dark-medium">{student?.religion}</td>
                     </tr>
                     <tr>
                       <td>Father Occupation:</td>
                       <td className="font-medium text-dark-medium">
                         Not Implemented Yet
                       </td>
                     </tr>
                     <tr>
                       <td>E-mail:</td>
                       <td className="font-medium text-dark-medium">
                         { student?.email }
                       </td>
                     </tr>
                     <tr>
                       <td>Admission Date:</td>
                       <td className="font-medium text-dark-medium">
                         { student?.admissionDate }
                       </td>
                     </tr>
                     <tr>
                       <td>Class:</td>
                       <td className="font-medium text-dark-medium">{ student?.studentClass }</td>
                     </tr>
                     <tr>
                       <td>Section:</td>
                       <td className="font-medium text-dark-medium">{ student?.studentSection }</td>
                     </tr>
                     <tr>
                       <td>Roll:</td>
                       <td className="font-medium text-dark-medium">{ student?.rollNo }</td>
                     </tr>
                     <tr>
                       <td>Address:</td>
                       <td className="font-medium text-dark-medium">
                         Not Implemented Yet
                       </td>
                     </tr>
                     <tr>
                       <td>Phone:</td>
                       <td className="font-medium text-dark-medium">
                         { student?.phoneNo }
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
           Designed by <a href="#">PsdBosS</a>
         </div>
       </footer>
     </div>:"No Student Found"
      }
      
    </>
  );
}

export default StudentDetail;
