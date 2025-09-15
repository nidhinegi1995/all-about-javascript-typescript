//How do you use the forEach method?
/*The forEach method is used to execute a provided function once for each array element. 
It takes a callback function as an argument, which is called with each element, its index, and the entire array.*/

let numbers: (number | string) [] = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "pineapple", "coconut"]

fruits.forEach((fruit, index) => {
console.log(`Fruit at index ${index} is ${fruit}`)
})// Output:
// Fruit at index 0 is apple
// Fruit at index 1 is banana
// Fruit at index 2 is pineapple
// Fruit at index 3 is coconut


//what is the difference btw for and foreach?
// Use `for` → when you need more control, such as:
// - breaking out of the loop early (using `break` or `return`)
// - using `async/await` inside the loop
// - manipulating the loop index manually

// Use `forEach` → when you just want to perform an operation on every item in the array
// and don’t need to break or use async logic.