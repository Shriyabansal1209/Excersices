const femaleStudents = ['f1', 'f2', 'f3', 'f4', 'f5'];
const maleStudents = ['m1', 'm2', 'm3', 'm4', 'm5'];
const students = femaleStudents.concat(maleStudents);
const sortedStudents = students.sort();
console.log(sortedStudents);
for (let i = 0; i < femaleStudents.length; i++) {
  console.log('The index is',i, femaleStudents[i]);
}
for (let j = 0; j < maleStudents.length; j++) {
  console.log('While',j, maleStudents[j]);
}
for (let k = 0; k < students.length; k++) {
  console.log('For',k, students[k]);
}
