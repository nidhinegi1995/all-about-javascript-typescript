//Explain the splice method with an example.

/*The splice() method in JavaScript is a powerful and flexible tool for modifying arrays. 
It allows us to add, remove, or replace elements within an array. 
It’s often used to update or manage array contents in various ways*/

//syntax: array.splice(start, deleteCount, item1, item2, ...)

//Removing elements from an array

const numbers= [2, 1, 3, 55, 34, 23];

numbers.splice(2, 2)

console.log(numbers)
//Output: [2, 1, 34, 23] 

//Adding elements to an array
//we can also use splice to add elements to an array without removing any existing elements.
//To do this, we set the deleteCount to 0 and provide the new elements as additional arguments.

let fruits = ['apple', 'banana', 'cherry'];

fruits.splice(1, 0, "pomegranate", "peach")

console.log(fruits)
//Output: ['apple', 'pomegranate', 'peach', 'banana', 'cherry']

//Replacing elements in an array
//we can also use splice to replace existing elements in an array.
//To do this, we specify the starting index, the number of elements to remove, and the new elements to add.

fruits.splice(1, 1, "pomegranate")

console.log(fruits)
