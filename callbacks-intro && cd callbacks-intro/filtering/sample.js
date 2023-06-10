const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
//Filter is going to iterate through the array and return a subset of the array based on the specified condition which is, is the element greated than 70 which in this case is our passing grade.
const passingGrades = grades.filter(element =>  element > 70);

console.log(passingGrades);