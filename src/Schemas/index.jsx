import * as yup from "yup";

export const StudentAdmissionFormSchema = yup.object({
    id: yup.string().nullable().default(null),
    firstName: yup.string().required("Please Enter your First Name").min(2,"First Name Should be atleast 2 character").max(30,"First Name should not be longer than 30 character"),
    lastName: yup.string().required("Please Enter your Last Name").min(2,"Last Name Should be atleast 2 character").max(30,"Last Name should not be longer than 30 character"),
    genderTypeProfileId: yup.string().required("Please Select Your Gender"),
    dateOfBirth: yup.date().required("Please Enter your Date of Birth"),
    email: yup.string().email("Please Enter the Valid Email"),
    roleShortName: yup.string().default("STUDNT"),
    studentCreateOrEditDto: yup.object({
      studentId: yup.string().nullable().default(null),
      rollNo: yup.string().required("Please Enter The Roll No"),
      bloodGroupTypeProfileId: yup.string().required("Please Select the Blood group"),
      religionTypeProfileId: yup.string().required("Please Select the Religion"),
      StudentClassTypeProfileId: yup.string().required("Please Select the Student Class"),
      StudentClassSectionTypeProfileId: yup.string().required("Please Select the Student Class Section"),
      admissionId: yup.string().required("Please Enter the Admission Id"),
      phoneNo: yup.string().required("Please Enter the Phone No"),
      shortBio: yup.string(),
      StudentPhotoBase64: yup.string().required("Please Enter the student Image"),
    })
});