
function saveObjectPropertiesToLocalStorage(obj) {
  // Save each property of the object to localStorage
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      localStorage.setItem(key, JSON.stringify(obj[key]));
    }
  }
  
  // Retrieve the object from localStorage and return it as a new object
  var newObj = {};
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    newObj[key] = JSON.parse(localStorage.getItem(key));
  }
  return newObj;
}


var myObj = { name: 'ali', age: 30, location: ' islamabad' };
var newObj = saveObjectPropertiesToLocalStorage(myObj);
