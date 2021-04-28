// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  for (let n = 0; n < grades.length; n++) {
    Math.ceil(grades[n] / 5) * 5 - grades[n] <= 2 && grades[n] > 37
      ? (grades[n] = Math.round(grades[n] / 5) * 5)
      : (grades[n] = grades[n]);
    console.log(grades[n]);
  }
  return grades;
}

gradingStudents([73, 67, 38, 33]);
