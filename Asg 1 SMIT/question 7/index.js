// Define the number of rows in the pattern
const numRows = 5;

// Outer loop to iterate over the rows
for (let i = 1; i <= numRows; i++) {
  // Inner loop to print the stars for each row
  for (let j = 1; j <= i; j++) {
    // Print a star for each iteration of the inner loop
    document.write("* ");
  }
  // Move to the next line after each row is complete
  document.write("<br>");
}



