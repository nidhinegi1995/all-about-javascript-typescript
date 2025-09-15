//Recursion is a process in which a function calls itself as a subroutine. 
// This allows the function to be repeated several times, as it can call itself during its execution. 
// Recursion is often used to solve problems that can be broken down into smaller, similar subproblems.

//Syntax:

function recursiveFunction(parameters){
  //Base case: stopping condition
  if(baseCase){
    return baseCaseValue;
  }
  
  //// Recursive case: function calls itself
  
  return recursiveFunction(modifiedParameters);
  
}

// Base Case:
// This is the condition that stops the recursion.
// Without a base case, the function will call itself indefinitely, leading to a stack overflow.
// Example: If calculating the factorial of a number, the base case is when the number is 0 or 1.
// Recursive Case:
// This is where the function calls itself with a modified input.
// The input is typically modified to move closer to the base case.
// Example: For factorial, the recursive case is n * factorial(n - 1).

//Factorial of a Number

function factorial(n){
  if(n===0 || n===1){
    return 1;
  }
  
  return n* factorial(n-1)
}

console.log(factorial(5))

// Output: 120

//Why Use Recursion?

//Fibonacci Sequence

//The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones (e.g., 0, 1, 1, 2, 3, 5, 8, ...).

//The Fibonacci sequence starts like this:

//Index:     0  1  2  3  4  5  6  7
// Value:     0, 1, 1, 2, 3, 5, 8, 13 ...

function fibonacci(n){
//base Condition
if(n===0 || n===1){
  return n;
}
//recursion
return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(6))

// Output: 8

//5 + 4
// 4+3   + 2+3
// (3+2) + (2+1)   + (1) + (2+1)
// (2+1) + (1+1)  + (1) + (1 +1)

// 5+3
