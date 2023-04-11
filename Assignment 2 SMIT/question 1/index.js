function adder(x) {
  return function(y) {
    return x + y;
  }
}

var add_five = adder(5); // creates a closure that adds 5 to any number passed to it

var result = add_five(10); // adds 5 to 10, returns 15

console.log(result); // prints 15
