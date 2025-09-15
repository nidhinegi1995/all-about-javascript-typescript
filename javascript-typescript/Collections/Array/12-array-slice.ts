//What is the slice method used for?

//The slice() method returns selected elements in a new array.

//The slice() method selects from a given start, up to a (not inclusive) given end.

//The slice() method does not change the original array.

//syntax: array.slice(start, end)

//extracting elements between two indices:

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

let newFruits = fruits.slice(1, 4)

console.log(newFruits)
//Expected output: ["Orange", "Lemon", "Apple"]

//extracting elements from a given index to the end of the array:
let newFruits2 = fruits.slice(1)

console.log(newFruits2)
//Expected output: ["Orange", "Lemon", "Apple", "Mango"]

//slicing the nested array:
const numbers: (number| number[])[]= [2, [1, 3, 55, 34, 23]];

let newNumbers = (numbers[1] as number[]).slice(2, 4)

console.log(newNumbers)
//Expected output: [55, 34]