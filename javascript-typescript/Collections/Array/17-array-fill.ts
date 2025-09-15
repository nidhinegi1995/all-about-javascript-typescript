//Explain the fill method with an example.

/*The fill() method in JavaScript is used to fill all the elements of an array from a start index to an end index with a static value.
It mutates the original array and returns the modified array.*/

//syntax
//array.fill(value, start, end)

//Filling array with a specific value
let numbers = [1, 2, 3, 4, 5];
numbers.fill(20)

console.log(numbers)
// Output: [20, 20, 20, 20, 20]

//Custom range filling
//from index 1 to 3(exclusive)
numbers.fill(20, 1, 3)

console.log(numbers)
//[1, 20, 20, 4, 5] 