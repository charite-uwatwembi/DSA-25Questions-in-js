
// Write a JavaScript function getDayName that takes a number between 1 and 7 
// as input and returns the corresponding day of the week (1 for Monday, 7 for Sunday).
//  If the input is not a valid number, the function should throw an error.


function getDayNumber(day) {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number- Enter a number between 1 and 7";
    }
}

console.log(getDayNumber(1));
console.log(getDayNumber(2));
console.log(getDayNumber(3));
console.log(getDayNumber(4));
console.log(getDayNumber(5));
console.log(getDayNumber(6));
console.log(getDayNumber(7));
console.log(getDayNumber(8));