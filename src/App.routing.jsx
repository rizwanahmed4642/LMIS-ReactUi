import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import SignUp from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import AdminDashboard from "./Components/Dashboard/Admin";
import StudentDashboard from "./Components/Dashboard/Students";
import ParentsDashboard from "./Components/Dashboard/Parents";
import TeacherDashboard from "./Components/Dashboard/Teacher";
import AllStudents from "./Components/Students/AllStudents";
import StudentDetail from "./Components/Students/StudentDetail";
import AdmissionForm from "./Components/Students/AdmissionForm";
import StudentPromotion from "./Components/Students/StudentPromotion";
import AllTeachers from "./Components/Teachers/AllTeachers";
import TeacherDetail from "./Components/Teachers/TeacherDetail";
import AddNewTeacher from "./Components/Teachers/AddNewTeacher";
import TeacherPayment from "./Components/Teachers/TeacherPayment";
import AllParents from "./Components/Parents/AllParents";
import ParentsDetail from "./Components/Parents/ParentsDetail";
import AddParent from "./Components/Parents/AddParent";
import AllBooks from "./Components/Library/AllBooks";
import AddBook from "./Components/Library/AddBook";
import AllFeeCollection from "./Components/Accounts/AllFeeCollection";
import AddExpenses from "./Components/Accounts/AddExpenses";
import AllExpenses from "./Components/Accounts/AllExpenses";
import AllClasses from "./Components/Class/AllClasses";
import AddNewClass from "./Components/Class/AddNewClass";
import AllSubject from "./Components/Subject/AllSubject";
import ClassRoutine from "./Components/Routine/ClassRoutine";
import StudentAttendance from "./Components/Attendance/StudentAttendance";
import Transport from "./Components/Transport/Transport";
import Hostel from "./Components/Hostel/Hostel";
import NoticeBoard from "./Components/NoticeBoard/NoticeBoard";
import Messaging from "./Components/Message/Messaging";
import ExamSchedule from "./Components/Exam/ExamSchedule";
import ExamGrades from "./Components/Exam/ExamGrades";
import AccountSettings from "./Components/AppSettings/AccountSettings";
import MapLocations from "./Components/Map/MapLocations";
import Alart from "./Components/UiElements/Alart";
import Button from "./Components/UiElements/Button";
import Grid from "./Components/UiElements/Grid";
import Modal from "./Components/UiElements/Modal";
import ProgressBar from "./Components/UiElements/ProgressBar";
import UiTab from "./Components/UiElements/UiTab";
import UiWidget from "./Components/UiElements/UiWidget";
import PageNotFound from "./Pages/PageNotFound";

function AppRouting() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<AdminDashboard />} />
            <Route path="StudentDashboard" element={<StudentDashboard />} />
            <Route path="ParentDashboard" element={<ParentsDashboard />} />
            <Route path="TeacherDashboard" element={<TeacherDashboard />} />
            {/* Students */}
            <Route path="all-students" element={<AllStudents />} />
            <Route path="student-detail/:id" element={<StudentDetail />} />
            <Route path="admission-form/:id?" element={<AdmissionForm />} />
            <Route path="student-promotion" element={<StudentPromotion />} />
            {/* Teachers */}
            <Route path="all-teachers" element={<AllTeachers />} />
            <Route path="teacher-detail" element={<TeacherDetail />} />
            <Route path="add-teacher" element={<AddNewTeacher />} />
            <Route path="teacher-payment" element={<TeacherPayment />} />
            {/* Parents */}
            <Route path="all-parents" element={<AllParents />} />
            <Route path="parents-detail" element={<ParentsDetail />} />
            <Route path="add-parents" element={<AddParent />} />
            {/* Library */}
            <Route path="all-books" element={<AllBooks />} />
            <Route path="add-books" element={<AddBook />} />
            {/* Accounts */}
            <Route path="all-fees" element={<AllFeeCollection />} />
            <Route path="all-expense" element={<AllExpenses />} />
            <Route path="add-expense" element={<AddExpenses />} />
            {/* Classes */}
            <Route path="all-classes" element={<AllClasses />} />
            <Route path="add-classes" element={<AddNewClass />} />
            {/* Subject */}
            <Route path="all-subjects" element={<AllSubject />} />
            {/* Class Routine */}
            <Route path="class-routine" element={<ClassRoutine />} />
            {/* Student Attendance */}
            <Route path="student-attendance" element={<StudentAttendance />} />
            {/* Exam */}
            <Route path="exam-schedule" element={<ExamSchedule />} />
            <Route path="exam-grade" element={<ExamGrades />} />
            {/* Transport */}
            <Route path="transport" element={<Transport />} />
            {/* Hostel */}
            <Route path="hostel" element={<Hostel />} />
            {/* Notice */}
            <Route path="notice-board" element={<NoticeBoard />} />
            {/* Messaging */}
            <Route path="messaging" element={<Messaging />} />
            {/* Ui Elements */}
            <Route path="notification-alart" element={<Alart />} />
            <Route path="button" element={<Button />} />
            <Route path="grid" element={<Grid />} />
            <Route path="modal" element={<Modal />} />
            <Route path="progress-bar" element={<ProgressBar />} />
            <Route path="ui-tab" element={<UiTab />} />
            <Route path="ui-widget" element={<UiWidget />} />
            {/* Map */}
            <Route path="map" element={<MapLocations />} />
            {/* Account Setting */}
            <Route path="account-settings" element={<AccountSettings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouting;
