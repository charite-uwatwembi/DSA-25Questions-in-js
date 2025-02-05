// Write a JavaScript function highlightElements that selects all <p> elements within a given container
//  and adds a click event listener to each. When a paragraph is clicked, its background color should change to yellow. 
// Demonstrate how this function works when passed an element ID as the container.


function highlightElements(containerId) {
const container = document.getElementById(containerId);

  const paragraphs = container.getElementsByTagName('p');

  for (let i = 0; i < paragraphs.length; i++) {

    paragraphs[i].addEventListener('click', function() {

      this.style.backgroundColor = 'yellow';

    });

  }

}