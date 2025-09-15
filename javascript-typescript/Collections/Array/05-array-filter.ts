//How does the filter method work?

/* Creates a new array with all elements that pass the test implemented by the provided function. 
It calls the function for each element in the array and includes the element in the new array if the function returns true.
The filter method does not modify the original array and is useful for extracting a subset of elements based on certain criteria,
such as finding all even numbers or filtering out invalid entries. */

// Create a new array consisting of only those elements that satisfy the condition checked by canVote() function.

let people: (number) [] = [10, 20, 13, 47, 25];

let canVote = (age:number) => {
    return age>=18;
}

let filtered = people.filter(canVote);
console.log(filtered)
// Output: [20, 47, 25] 

//Create a new array consisting of only those elements that satisfy the condition checked by isPositive() function.

let numbers: (number) [] = [10, -20, 13, -47, 25, 0];

let ispositive = (num:number) => {
    return num>0;
}

let filtered2 = numbers.filter(ispositive);
console.log(filtered2)
// Output: [10, 13, 25]

//Create a new array consisting of only those elements that satisfy the condition checked by isEven() function.
//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

let filtered3 = numbers.filter((num) => num % 2 === 0);
console.log(filtered3)
// Output: [10, -20, 0]


