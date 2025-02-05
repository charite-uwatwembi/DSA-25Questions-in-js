
// findFirstEven function iterates through the input array using a for loop. Within the loop, 
// it uses an if statement to check if the current number is even (i.e., divisible by 2 with no remainder). 
// If an even number is found, it is returned immediately. 
// If the loop completes without finding an even number, the function returns null.

function findFirstEven(a) {
    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 == 0){
            return a[i];
        }
    }
    return null;
}
console.log(findFirstEven([1, 3, 7, 8, 5]));
console.log(findFirstEven([1, 2, 7, 8, 5]));

console.log(findFirstEven([1, 3, 7, 5]));

console.log(findFirstEven([2, 4, 6]));