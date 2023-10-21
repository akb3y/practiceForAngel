// The Fibonacci sequence is a series of numbers that starts with 0 and 1, and each subsequent number in the sequence is the sum of the two preceding ones. It is a simple and famous mathematical sequence that has many interesting properties.

// Here's how it begins:

// Start with 0.
// Then, add 1 to 0 to get the next number, which is 1.
// Now, add the last two numbers (1 and 1) to get the next number, which is 2.
// Continue this pattern: add the last two numbers to find the next number.

function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      let a = 0;
      let b = 1;
      let result;
      
      for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
      }
      
      return result;
    }
  }

  module.exports = fibonacci;