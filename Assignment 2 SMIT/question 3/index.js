

      function addParagraph() {
        // Create a new paragraph element
        var newParagraph = document.createElement('p');
        
        // Set the text content of the new paragraph element to a random number
        var randomNumber = Math.floor(Math.random() * 100);
        newParagraph.textContent = 'This is paragraph number ' + randomNumber;
        
        // Append the new paragraph element to the bottom of the document body
        document.body.appendChild(newParagraph);
      }
    