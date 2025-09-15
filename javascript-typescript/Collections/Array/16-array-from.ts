//what is the from method and how it is used?

/*The Array.from method creates a new, shallow-copied Array instance from an array-like or iterable object. 
It is useful for converting other structures, such as NodeLists, strings, sets, into arrays.
You can also provide a mapping function as the second argument to transform the elements of the new array.*/

//convert a string to an array

let string = 'hello';

let Arr = Array.from(string);

console.log(Arr)

//output: ['h', 'e', 'l', 'l', 'o']

//convert a set to an array

let set = ([1, 2, 3])

let Arr2 = Array.from(set)

console.log(Arr2)

//output: [1, 2, 3]