
// QUESTION NO 1. FIND GREATER NO USING PROMPT

// Accept two numbers as input from the user
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Convert the input strings to numbers
num1 = Number(num1);
num2 = Number(num2);

// Check which number is larger and display it in the console
if (num1 > num2) {
  console.log(num1 + " is larger than " + num2);
} else if (num2 > num1) {
  console.log(num2 + " is larger than " + num1);
} else {
  console.log("Both numbers are equal.");
}
//_______________________________________________

