// Initialize an array of student marks
const marks = [80, 90, 70, 60, 75];

// Calculate the average mark
const sum = marks.reduce((acc, curr) => acc + curr);
const avg = sum / marks.length;

// Determine the grade based on the average mark
let grade;
if (avg < 60) {
  grade = "F";
} else if (avg < 70) {
  grade = "D";
} else if (avg < 80) {
  grade = "C";
} else if (avg < 90) {
  grade = "B";
} else {
  grade = "A";
}

// Display the average mark and corresponding grade
console.log("The average mark is: " + avg);
console.log("The corresponding grade is: " + grade);


