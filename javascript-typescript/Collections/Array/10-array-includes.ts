//What does the includes method do?

/*The includes() method in JavaScript returns true if an array contains a specified value, 
and false if the value is not found. This method simplifies checking for the presence of an element within an array, 
offering a quick and efficient way to return a boolean result.*/

//syntax
// array.includes(value, fromIndex)

//searching for a number in an array
let numbers=[4, 2, 32, 12];

let includes2 =numbers.includes(2)

console.log(includes2)// true

//searching for a string in an array
let fruits=['apple', 'banana', 'Kiwi'];

let includesApple =fruits.includes('apple')

console.log(includesApple)// true