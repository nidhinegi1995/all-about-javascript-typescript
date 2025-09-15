/*A Javascript map is a collection of elements where each element is stored as a Key, value pair.
Map objects can hold both objects and primitive values as either key or value. 
When we iterate over the map object it returns the key, and value pair in the same order as inserted.*/

//How to Create a Map?

/*You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()*/

//Passing an Array(s) to new Map()

const map1 = new Map<string, string | number>([
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York']
]);

//Create a Map and use Map.set()

const fruits = new Map();

fruits.set("apple", 500)
fruits.set("mango", 800)

//The get() Method
//The get() method gets the value of a key in a Map:

console.log(fruits.get("apple")) // 500
console.log(fruits.get("mango")) // 800

//Maps are Objects
//typeof returns object:

console.log(typeof fruits) // "object"

//instanceof returns true:
//instanceof checks if an object is an instance of a specific class or constructor function:
console.log(fruits instanceof Map) // true

//size Property
//The size property returns the number of key/value pairs in a Map:
console.log(fruits.size) // 2

//delete() Method
//The delete() method removes a specified element from a Map:
fruits.delete("apple");
console.log(fruits.size) // 1

//iterate over Map
//You can iterate over the Map using forEach() or for...of loop:

fruits.forEach((value,key)=>console.log(`${value}, ${key}`))
// Output:
// 500, apple
// 800, mango

