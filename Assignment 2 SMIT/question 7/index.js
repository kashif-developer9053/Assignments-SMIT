function getObjectFromLocalStorage(key) {
  // Get the JSON string from localStorage with the specified key
  var objStr = localStorage.getItem(key);
  
  // If the JSON string is null or undefined, return null
  if (!objStr) {
    return null;
  }
  
  // Parse the JSON string into an object and return it
  var obj = JSON.parse(objStr);
  return obj;
}
