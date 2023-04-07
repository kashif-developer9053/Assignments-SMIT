// Accept a number as input from the user
let num = prompt("Enter a number:");

// Convert the input string to a number
num = Number(num);

// Check the sign of the number using a conditional statement
if (num > 0) {
  alert("The number is positive.");
} else if (num < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}
