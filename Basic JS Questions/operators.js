// Write a JavaScript function compareSums that takes four numbers as input, adds the first two numbers together, 
// and then compares the sum to the sum of the second two numbers. 
// The function should return true if the first sum is greater than the second sum, and false otherwise.

function compareSums(num1,num2,num3,num4){
    let sum1 = num1 + num2;
    let sum2 = num3 + num4;
    
    return sum1 > sum2;
      
}
console.log(compareSums(1,2,3,4));
console.log(compareSums(5,6,2,4));