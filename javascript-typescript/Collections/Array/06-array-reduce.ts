//Describe the reduce method with an example.

/*The .reduce() method reduces an array to a single value by applying a function on each 
element (from left to right). */

// 💡 Array.prototype.reduce() Syntax:

// array.reduce((accumulator, currentValue) => {}, initialValue);

//Sum of array using reduce
let numbers1: (number) [] = [10, 20, 13, 47, 25, 0];

let sum = numbers1.reduce((a:number, b:number) => {
 return a+b},0)

console.log(sum)// Output: 115

//Sum of lengths of strings in an array using reduce

let fruits=['banana', 'apple', 'Kiwi'];

let sumofStrings = fruits.reduce((a:number,b:string)=>{return a+b.length}, 0) 

console.log(sumofStrings)// Output: 15