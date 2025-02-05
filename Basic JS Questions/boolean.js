// Write a JavaScript function logicalCheck that takes three boolean values as input. 
// The function should return true if at least two of the three values are true, and false otherwise.

function logicalCheck(a, b, c) {
    let count = 0;

  if (a) count += 1;

  if (b) count += 1;

  if (c) count += 1;

  return count >= 2;
}
console.log(logicalCheck(true, false, true));
console.log(logicalCheck(false, false, true));