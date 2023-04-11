function saveObjectToLocalStorage(key, obj) {
  // Convert the object to a JSON string
  var objStr = JSON.stringify(obj);
  
  // Save the JSON string to localStorage with the specified key
  localStorage.setItem(key, objStr);
}

