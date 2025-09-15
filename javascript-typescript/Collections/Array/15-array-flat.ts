//Explain the flat method.

/*The flat() method in JavaScript creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
If no depth is provided, it defaults to 1.*/

//syntax
// array.flat(depth);

//Flattening of a multi-dimensional array
let multiDimensionalArray: any[] = [1, 2, [3, 4, [5, 6]]];

let flattenedArr = multiDimensionalArray.flat(Infinity);

console.log(flattenedArr)

//Output: [1, 2, 3, 4, 5, 6]

//Flattening with specified depth 0 

let flattenedArr2 = multiDimensionalArray.flat(0);

console.log(flattenedArr2)

//Output: [1, 2, [3, 4, [5, 6]]]

//Flattening with depth of 1

let flattenedArr3 = multiDimensionalArray.flat(1);

console.log(flattenedArr3)

//Output: [1, 2, 3, 4, [5, 6]]

//Flattening with depth of 2

let flattenedArr4 = multiDimensionalArray.flat(2);

console.log(flattenedArr4)

//Output: [1, 2, 3, 4, 5, 6]

