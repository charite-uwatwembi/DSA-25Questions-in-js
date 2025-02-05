
// Write a JavaScript function createPerson that takes a name as an argument and returns an object with a method greet. 
// The greet method should return a greeting message including the person’s name. 
// Use an arrow function for the greet method to illustrate the this binding behavior of arrow functions


function createPerson(name){
    return {
        // name: name,
        greet: () =>`Hello, my name is ${name}`
    }
}
const person = createPerson("John");
console.log(person.greet());