//What does the sort method do and how can you customize it?

/*JS sort() method is used to rearrange the array elements alphabetically in ascending order. 
It updates the given array and does not return anything.*/

//sort elements of an array alphabetically in ascending order

let fruits = ['cherry', 'pomegranate', 'banana', 'apple'];

console.log(fruits.sort())
//Output: [ 'apple', 'banana', 'cherry', 'pomegranate' ]

//sort elements of an array of strings in descending order

console.log(fruits.sort((a:any,b:any)=>b.localeCompare(a)))

//Output: [ 'pomegranate', 'cherry', 'banana', 'apple' ]

//case insensitive sort
let mixedFruits = ['cherry', 'Pomegranate', 'banana', 'BANANA', 'apple', 'APPLE'];

console.log(mixedFruits.sort((a:any, b:any)=>a.toLowerCase().localeCompare(b.toLowerCase())));
//Output: [ 'apple', 'APPLE', 'banana', 'BANANA', 'cherry', 'Pomegranate' ]

//Sorting integer arrays in ascending order
// The default sort method converts numbers to strings and sorts them lexicographically
// This can lead to unexpected results, so we need to provide a comparison function.

let numbers = [23, 3, 21, 324, 443, 335, 33]

console.log(numbers.sort((a:number, b:number)=>a-b))
//Output: [ 3, 21, 23, 33, 324, 335, 443 ]

//Sorting integer arrays in descending order

console.log(numbers.sort((a:number, b:number)=>b-a))
//Output: [ 443, 335, 324, 33, 23, 21, 3 ]

//Sorting arrays of objects by a specific property
//array of people objects with different names and ages

let people = [{name: "Nidhi", age:98}, {name:"Negi", age:56}, {name:"Ankur", age:108}]

//sort by age in ascending order
people.sort((a:any, b:any)=>a.age - b.age)
console.log(people)
//Output: [ { name: 'Negi', age: 56 }, { name: 'Nidhi', age: 98 }, { name: 'Ankur', age: 108 } ]

//sort objects for name in ascending order
people.sort((a:any, b:any)=>a.name.localeCompare(b.name))
console.log(people)
//Output: [ { name: 'Ankur', age: 108 }, { name: 'Negi', age: 56 }, { name: 'Nidhi', age: 98 } ]