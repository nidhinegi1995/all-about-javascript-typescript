//Methods
//push: Adds elements to the end of an array.

let fruits = ['apple', 'banana'];
let numbers = [1, 2, 3];
fruits.push('cherry');
console.log(fruits);  //['apple', 'banana', 'cherry']

//pop: Removes the last element from an array.
fruits.pop();
console.log(fruits); // ['apple', 'banana']

//shift: Removes the first element from an array.
fruits.shift();
console.log(fruits); // ['banana', 'cherry']

//unshift: Adds elements to the beginning of an array.
fruits.unshift('apple');
console.log(fruits); // ['apple', 'banana', 'cherry']

//How do you check if a variable is an array?
/*To check if a variable is an array, you can use the Array.isArray method. 
This method returns true if the variable is an array, and false otherwise.*/
console.log(Array.isArray(fruits));   //true
console.log(Array.isArray(numbers));   //true

//How do you concatenate two arrays?
/*You can concatenate two arrays using the concat method or the spread operator (...).
The concat method returns a new array that is the combination of the two arrays, 
while the spread operator allows you to create a new array by spreading the elements of both arrays.*/

let moreFruits = ["berry", "papaya"]

let allFruits = fruits.concat(moreFruits);
console.log(allFruits)
// ['apple', 'banana', 'cherry', 'berry', 'papaya']

let allFruits2 = [...fruits, ...moreFruits]
console.log(allFruits)
// ['apple', 'banana', 'cherry', 'berry', 'papaya']

//Explain the map method and provide an example.

/*The Map method creates a new array with the results of calling a provided function on every element in the calling array. 
It does not modify the original array but returns a new array with the transformed values.
The map method is often used for data transformation tasks, such as converting an array of numbers to their squares or 
extracting specific properties from an array of objects.*/

let doubled = numbers.map((num: number) => num*2)
console.log(doubled)
// [2, 4, 6]

let sqroot = numbers.map((num: number) => Math.sqrt(num))
console.log(sqroot)
// [1, 1.4142135623730951, 1.7320508075688772]

let square = numbers.map((num: number, index) => {return{
    key: index, value: num*num}})
console.log(square)
// [{key: 0, value: 1}, {key: 1, value: 4}, {key: 2, value: 9}]
