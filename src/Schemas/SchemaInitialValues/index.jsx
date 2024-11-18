
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


export const TeacherFormInitialValue = (input) => {
  debugger
  return {
    id: input?.userId ?? null,
    firstName: input?.firstName ?? "",
    lastName: input?.lastName ?? "",
    genderTypeProfileId: input?.genderTypeProfileId ?? "",
    dateOfBirth: input?.dateOfBirth?.substring(0,10) ?? '',
    email: input?.email ?? "",
    password: input?.password ?? "",
    roleShortName: input?.roleShortName ?? "TACHR",
    teacherCreateOrEditDto: {
      teacherId: input?.teacherId ?? null,
      idNo: input?.idNo ?? "",
      bloodGroupTypeProfileId: input?.bloodGroupTypeProfileId ?? "",
      religionTypeProfileId: input?.religionTypeProfileId ?? "",
      classTypeProfileId: input?.classTypeProfileId ?? "",
      sectionTypeProfileId: input?.sectionTypeProfileId ?? "",
      subjectTypeProfileId: input?.subjectTypeProfileId ?? "",
      salary: input?.salary ?? 0,
      address: input?.address ?? "",
      phoneNo: input?.phoneNo ?? "",
      shortBio: input?.shortBio ?? "",
      teacherPhotoBase64: input?.teacherPhotoBase64 ?? "",
    },
  };
}