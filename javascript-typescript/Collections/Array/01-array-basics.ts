/*Arrays are ordered collections of elements. 
They are indexed, meaning each element has a numeric position within the array, starting from 0.*/

//Declaration
let arr = [1, 2, 3, 4, 5];
let fruits1 = ['banana', 'apple', 'cherry'];

//Accessing Elements of an array
let firstElement = arr[0];
console.log(fruits1[1]);

//Declaring Mixed-Type Arrays in TypeScript
let numbers: (number | string) [] = [1, 2, 3, 4, 5];
numbers.unshift("cherry");
console.log(numbers); // ['cherry', 1, 2, 3, 4, 5]

//What is length property of an array?
console.log(fruits1.length);   //3

//How do you copy an array?
/*You can copy an array using the spread operator (...) or the Array.from method. 
Both methods create a shallow copy of the original array. The spread operator is concise and widely used, 
while Array.from is useful when you need to convert array-like objects or iterable objects to arrays.*/

//using spread operator
//It allows an iterable (like an array or a string) to be expanded into individual elements. 

let copiedArray = [...fruits1]
console.log(copiedArray)

//Function Arguments: It can be used to spread the elements of an array as arguments to a function.

const arr01: [number, number, number] = [1,2,4];
function sum(a: number, b: number, c: number){
return a+b+c;
}
console.log(sum(...arr01));


//using Array.from

let copiedArray2 = Array.from(fruits1)
console.log(copiedArray2)

//Finding Duplicates in an Array

let arrayWithDuplicates = [1, 2, 3, 4, 5, 3, 2, 1];
let duplicates = arrayWithDuplicates.filter((item, index) => arrayWithDuplicates.indexOf(item) !== index);
console.log(duplicates); // [2, 3, 1]

//How do you merge two arrays and remove duplicates/have unique values?
//Spread Operator: It can be used to concatenate arrays.

let arr1 = [1, 2, 3, 4]
let arr2 = [2, 3, 4, 5, 6]

let mergedArr = [...arr1, ...arr2]

let uniqueArr = new Set(mergedArr)

console.log(uniqueArr)
//Output: Set { 1, 2, 3, 4, 5, 6 }

//How can you find the intersection of two arrays?
let intersection=arr1.filter(value=>arr2.includes(value))

console.log(intersection)
//Output: [2, 3, 4] 

//How do you remove duplicates from an array?

let duplicateArr = [2, 3, 4, 5, 6, 6, 3, 1, 2]

let uniqueArr2=[...new Set(duplicateArr)]

console.log(uniqueArr2)
//Output: [2, 3, 4, 5, 6, 1]

//Explain the copyWithin method with an example.

//The copyWithin method shallow copies part of an array to another location in the same array, modifying it in place.

duplicateArr.copyWithin(0, 7)

console.log(duplicateArr)

//Output: [1, 2, 4, 5, 6, 6, 3, 1, 2] 

//How do you remove falsy values from an array?

//Falsy values in JavaScript include false, 0, "", null, undefined, and NaN.
//they can be removed from an array using the filter method with a Boolean constructor as the callback function.

let mixedArray = [0, 1, false, 2, '', 3, null, 4, undefined, 5];
let truthyArray = mixedArray.filter(Boolean);
console.log(truthyArray);
//Output: [1, 2, 3, 4, 5]

//Access Multi-Dimensional Arrays With Indexes:

const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr3[3];
const nestedSubarray = arr3[3][0];
const element = arr[3][0][1];

//In this example, subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], 
// and element has the value 11.



