function updateStudentGradeByCity(studentArray, city, newGrades) {
  return studentArray
    .filter(student => student.location === city)
    .map(student => {
      const matchedGrade = newGrades.find(grade => grade.studentId === student.id);

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: matchedGrade ? matchedGrade.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
