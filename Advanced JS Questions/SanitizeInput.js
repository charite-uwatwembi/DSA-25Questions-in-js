const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document;

function sanitizeInput(input) {
  const element = document.createElement('div');
  element.textContent = input;
  return element.innerHTML;
}

// Create a test function that calls sanitizeInput with a mock input value
function testSanitizeInput() {
  const mockInputValue = '<script>alert("XSS Attack")</script>';
  const sanitizedInput = sanitizeInput(mockInputValue);
  console.log(`Sanitized Input: ${sanitizedInput}`);
}

// Call the test function
testSanitizeInput();

// Example usage on server-side
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const xssFilters = require('xss-filters');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const userInput = req.body.userInput;
  const sanitizedInput = xssFilters.inHTMLData(userInput);
  console.log(`Sanitized Input on Server: ${sanitizedInput}`);
  res.send(`Received sanitized input: ${sanitizedInput}`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});