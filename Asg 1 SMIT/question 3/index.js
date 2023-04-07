// Accept five numbers as input from the user
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
let num4 = prompt("Enter the fourth number:");
let num5 = prompt("Enter the fifth number:");

// Convert the input strings to numbers
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
num4 = Number(num4);
num5 = Number(num5);

// Check which number is larger and store it in a variable
let largest = num1;
if (num2 > largest) {
  largest = num2;
}
if (num3 > largest) {
  largest = num3;
}
if (num4 > largest) {
  largest = num4;
}
if (num5 > largest) {
  largest = num5;
}

// Display the largest number in the console
console.log("The largest number is: " + largest);
