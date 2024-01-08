function getStudentIdsSum(studentArray) {
  return studentArray.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
