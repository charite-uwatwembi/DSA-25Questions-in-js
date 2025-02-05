// Write a JavaScript function debounce that takes a function func and a delay wait as arguments, 
// and returns a debounced version of func. The debounced function should delay 
// the execution of func until after wait milliseconds have elapsed since 
// the last time the debounced function was invoked. Demonstrate 
// how this function can be used to optimize performance by limiting the number of times
//  a search input triggers an API call.

function debounce(func, wait) {

    let timeout;
  
    return function(...args) {
  
      clearTimeout(timeout);
  
      timeout = setTimeout(() => func.apply(this, args), wait);
  
    };
  
  }
  
  // Example usage
  
  function searchApi(query) {
  
    console.log(`API call with query: ${query}`);
  
  }
  
  const debouncedSearch = debounce(searchApi, 300);
  
  // HTML structure for demonstration
  
  /*
  
  <input type="text" id="searchInput" placeholder="Search...">
  
  */
  
 // Create a test function that calls debouncedSearch with a mock input value
function testDebouncedSearch() {
    const mockInputValue = 'Hello, World!';
    debouncedSearch(mockInputValue);
  }
  
  // Call the test function
  testDebouncedSearch();