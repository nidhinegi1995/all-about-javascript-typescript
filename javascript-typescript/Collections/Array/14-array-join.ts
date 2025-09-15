//How do you use the join method?

/*The JavaScript Array join() Method is used to join the elements of an array into a string. 
The elements of the string will be separated by a specified separator and its default value is a comma(,).*/

//syntax
//array.join(separator);

//join together the elements of an array into a string using '|'
let numbers1 = [1, 2, 3, 4, 5];
let string = numbers1.join('|')

console.log(string)
//Output: "1|2|3|4|5"

//join together the elements of an array into a string using ',' which is the default separator
let string2 = numbers1.join()

console.log(string2)
//Output: "1,2,3,4,5"

//join together the elements of an array into a string using an empty string as a separator
let string3 = numbers1.join('')

console.log(string3)
//Output: "12345"

//How can you convert an array to a string?

//An array can be converted to a string using toString or join method.

let fruits = ['apple', 'banana', 'cherry']
console.log(fruits.toString())
//Output:"apple,banana,cherry"

//What are array methods keys(), values(), and entries()?

//The keys(), values(), and entries() method return new Array iterator objects.
//Keys returns the keys indexes
//values returns the values
//entries returns the key-value pairs

let arrIteratorObject = [1, 2, 3, 4, 5]
let keys = arrIteratorObject.keys()
console.log([...keys])
//[0, 1, 2, 3, 4] 

let values = arrIteratorObject.values()
console.log([...values])
//[1, 2, 3, 4, 5] 

let entries = arrIteratorObject.entries()
console.log([...entries])

//return an array of [key, value] pairs from the object.
//[[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]] 