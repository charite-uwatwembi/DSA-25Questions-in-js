


function findFirstEven(a) {
    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 == 0){
            return a[i];
        }
    }
    return null;
}
console.log(findFirstEven([1, 3, 7, 8, 5]));

console.log(findFirstEven([1, 3, 7, 5]));

console.log(findFirstEven([2, 4, 6]));