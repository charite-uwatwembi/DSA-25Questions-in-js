// Write a JavaScript function addListItem that dynamically creates a new list item (<li>) 
// with specified text and appends it to an unordered list (<ul>) with a given ID. 
// Implement event delegation so that clicking any list item displays an alert with its text content.

function addListItem(id, text) {
        const ul = document.getElementById(id);
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
        li.addEventListener('click', function() {
            alert(this.textContent);
        });
    }