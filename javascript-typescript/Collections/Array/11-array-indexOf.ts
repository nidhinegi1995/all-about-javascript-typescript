//How do you use the indexOf method?

/*The indexOf method returns the first index at which a given element can be found in the array, 
or -1 if it is not present. It can also accept a second argument to specify the index to start the search from*/

let fruitsIndexOf = ['apple', 'banana', 'Kiwi'];

console.log(fruitsIndexOf.indexOf('apple'))
console.log(fruitsIndexOf.indexOf('banana'))
console.log(fruitsIndexOf.indexOf('mango'))
// Output:
// 0
// 1
// -1

//What is the findIndex method and how is it used?

//The findIndex method returns the index of the first element in the array that satisfies the provided testing function.
//If no elements satisfy the testing function, -1 is returned.

let numbers = [5, 12, 8, 130, 44];

let index = numbers.findIndex(num=>num>3)
console.log(index)