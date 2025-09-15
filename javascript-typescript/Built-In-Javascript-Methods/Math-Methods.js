//1. Math.random():
// The Math.random() function returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
// This can be useful for generating random numbers for various applications, such as games or simulations.

// Example usage:
const randomNumber = Math.random();
console.log("Random Number:", randomNumber);

//Output: Random Number: 0.123456789 (example output, actual value will vary)

//Math.sqrt():
//Write a JavaScript function to check if a given number is prime. 

function isPrime(num) {
  // Prime numbers are greater than 1
  if (num <= 1) {
    return false;
  }
  
  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // If the number is divisible by any number between 2 and its square root, it's not prime
      return false;
    }
  }
// If the loop completes without finding any divisors, the number is prime
  return true;
}

console.log(isPrime(11)); // Output: true
console.log(isPrime(15)); // Output: false  



