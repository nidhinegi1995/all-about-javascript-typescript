//What is the purpose of the find method?

/*The find method returns the value of the first element in the array that satisfies the provided testing function. 
If no elements satisfy the testing function, undefined is returned.*/

let numbers=[1, 2, 3, 4, 5];

let foundNumber = numbers.find((num:number)=>num>3);

console.log(foundNumber)// Output: 4