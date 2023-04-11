
function searchArray(arr, val) {
  // Base case: if the array is empty, return false
  if (arr.length === 0) {
    return false;
  }
  
  // Recursive case: if the first element in the array is equal to the value,
  // return true, otherwise recursively call the function with the rest of the array
  if (arr[0] === val) {
    return true;
  } else {
    return searchArray(arr.slice(1), val);
  }
}


var arr = [1, 2, 3, 4, 5];
var val = 3;

var result = searchArray(arr, val);

console.log(result); // prints true
