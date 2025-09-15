//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
// The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence typically looks like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function fibonacciSequence(numTerms) {
  // Initialize an array to store the Fibonacci sequence
let numTerms;
let sequence = [];

function fibonnacci(numTerms){
    let term0 = 0;
    let term1 = 1;
    let nextTerm;
    
    if(numTerms==1){
        return sequence;
    }
    sequence.push(0)
    if(numTerms>1){
        sequence.push(term1);
    }
    
    for(let i=2; i<numTerms; i++ ){
        nextTerm = term0 + term1;
        sequence.push(nextTerm);
        term0 = term1;
        term1 = nextTerm
    }
    return sequence;
}}

console.log(fibonacciSequence(8))

//Output: [0, 1, 1, 2, 3, 5, 8, 13]

//Implement a function that returns the average value of numbers in an array. 

function averageArray(arr) {
  // Calculate the sum of the array elements
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  // Calculate the average by dividing the sum by the number of elements
  let average = sum / arr.length;
  
  return average;
}

console.log(averageArray([10, 20, 30, 40, 50])); // Output: 30