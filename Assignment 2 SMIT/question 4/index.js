

      function addListItem() {
        // Create a new list item element
        var newListItem = document.createElement('li');
        
        // Set the text content of the new list item element to a random number
        var randomNumber = Math.floor(Math.random() * 100);
        newListItem.textContent = 'List item number ' + randomNumber;
        
        // Append the new list item element to the unordered list
        var myList = document.getElementById('myList');
        myList.appendChild(newListItem);
      }
 