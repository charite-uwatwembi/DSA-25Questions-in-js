// Write a JavaScript function createCounter that returns an object with two methods: increment and getValue. 
// The increment method should increase a private counter variable by 1, and the getValue 
// method should return the current value of the counter. 
// Demonstrate the usage of this function with both function declarations and function expressions.

// Using function declaration

function createCounter() {

  let counter = 0;

  return {

    increment: function() {

      counter += 1;

    },

    getValue: function() {

      return counter;

    }

  };

}

const counter1 = createCounter();

counter1.increment();

counter1.increment();

console.log(counter1.getValue()); // 2

// Using function expression

const createCounterExpr = function() {

  let counter = 0;

  return {

    increment: function() {

      counter += 1;

    },

    getValue: function() {

      return counter;

    }

  };

};

const counter2 = createCounterExpr();

counter2.increment();

console.log(counter2.getValue()); // 1