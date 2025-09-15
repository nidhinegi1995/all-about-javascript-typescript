//How do you iterate over an array?
//You can iterate over an array using a for loop. This allows you to access each element in the array by its index.
let fruits = ['apple', 'banana', 'cherry'];
for(let i=0; i<fruits.length; i++){
console.log(fruits[i]);
}// Output: apple, banana, cherry

//Iterating Over an Array using for...of
//You can also use the for...of loop to iterate over the elements of an array directly.
/*It is better choice for traversing items of iterables compared to traditional for and for in loops, 
especially when we have break or continue statements.*/

for(const fruit of fruits){
    console.log(fruit)
}// Output: apple, banana, cherry

//What is the difference between for...of and for...in loops in arrays?
/*The for...of loop iterates over the values of an array, 
whereas the for...in loop iterates over the keys (indexes) of an array. 
The for...of loop is generally preferred for arrays because it directly accesses the elements, 
while the for...in loop is more suitable for iterating over object properties.*/