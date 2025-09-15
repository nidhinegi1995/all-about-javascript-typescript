//Array Interview Questions

//Given an array of numbers, write a function to find the largest and smallest numbers in the array.

function MaxMin(arr){
const max = Math.max(...arr);
const min = Math.min(...arr);
return [max, min]
}

console.log(MaxMin([1, 2, 3]));
//Output: [3, 1]

//Rotate the array by one position to the right.

function rotateArray(arr) {
    const n = arr.length;
    return [arr[n - 1], ...arr.slice(0, n - 1)];
}
console.log(rotateArray([1, 2, 3, 4, 5])); // Output: [5, 1, 2, 3, 4]
//Output: [5, 1, 2, 3, 4]

//Counting frequencies of array elements

function countFrequencies(arr) {
    const frequencyMap = new Map();
    arr.forEach(item => {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    });
    return frequencyMap;
}
console.log(countFrequencies([1, 2, 2, 3, 3, 3]));
//Output: Map { 1 => 1, 2 => 2, 3 => 3 }

//Explain how you handle multiple return in a function

// In JavaScript, a function can only return one value. However, you can return multiple values by using an array or an object. 

// For example, to return both the maximum and minimum values from a function, you can do the following:

function getMaxMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min }; // Returning an object with both values
}

const result = getMaxMin([1, 2, 3]);
console.log(result.max); // Output: 3
console.log(result.min); // Output: 1

//write a program in javascript to interchange values from 2 variables only dont introduce third variable.

let a = 5;
let b = 10;

a = a + b; // Step 1: Add both variables
b = a - b; // Step 2: Subtract new b from sum to get original a
a = a - b; // Step 3: Subtract new b from sum to get original b

console.log(a); // Output: 10
console.log(b); // Output: 5

//swap

[a, b] = [b, a];

//Here, we use array destructuring to swap the values of a and b without introducing a third variable.