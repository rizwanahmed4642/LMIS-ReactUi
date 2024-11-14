
export const StudentAdmissionForminitialValue = (input) => {
  debugger
  return {
    id: input?.id ?? null,
    firstName: input?.firstName ?? '',
    lastName: input?.lastName ?? '',
    genderTypeProfileId: input?.genderTypeProfileId ?? '',
    dateOfBirth: input?.dateOfBirth?.substring(0,10) ?? '',
    email: input?.email ?? '',
    password: '',
    roleShortName: "STUDNT",
    studentCreateOrEditDto: {
      studentId: input?.studentId ?? null,
      rollNo: input?.rollNo ?? '',
      bloodGroupTypeProfileId: input?.bloodGroupTypeProfileId ?? '',
      religionTypeProfileId: input?.religionTypeProfileId ?? '',
      StudentClassTypeProfileId: input?.studentClassTypeProfileId ?? '',
      StudentClassSectionTypeProfileId: input?.studentClassSectionTypeProfileId ?? '',
      admissionId: input?.admissionId ?? '',
      phoneNo: input?.phoneNo ?? '',
      shortBio: input?.shortBio ?? '',
      StudentPhotoBase64: input?.studentPhotoBase64 ?? '',
    }
  }
}