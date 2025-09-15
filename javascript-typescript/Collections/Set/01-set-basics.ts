//Explain the Set object in JavaScript
//Sets are collections of unique values. They automatically remove duplicates and can store any type of value.

//Even though 3 is repeated, Set stores only unique values.

const mySet = new Set ([1, 2, 3, 3, 4, 5]) 

console.log(mySet)
//Output: Set { 1, 2, 3, 4, 5 }

//Demonstrate how to add elements to a Set.
//The .add() method adds elements to the Set, but duplicates are ignored.

mySet.add(10);
mySet.add(20);
mySet.add(10)//duplicate
console.log(mySet)
//Output: Set { 1, 2, 3, 4, 5, 10, 20 }

//Show how to remove a specific element from a Set.
//The .delete() method removes the specified value from the Set.

mySet.delete(10);
mySet.delete(20);
console.log(mySet)
//Output: Set { 1, 2, 3, 4, 5 }

//Write code to check if a value exists in a Set.

console.log(mySet.has(3))//Output: true
console.log(mySet.has(6))//Output: false
console.log(mySet.has(4))//Output: true

//Write code to convert a Set to an array.

const arr = Array.from(mySet);
console.log(arr)
//Output: [ 1, 2, 3, 4, 5 ]

//Write code to compute the union of two sets.

const mySetA = new Set ([1, 2, 3, 3, 4, 5]) 
const mySetB = new Set ([3, 4, 5, 6, 7, 8])
const union = new Set ([...mySetA, ...mySetB]);
console.log(union)
//Output: Set { 1, 2, 3, 4, 5, 6, 7, 8 }

//Write code to find common elements between two sets.

const instersection = new Set ([...mySetA].filter((value:number)=>mySetB.has(value)));
console.log(instersection)
//Output: Set { 3, 4, 5 }

//Write code to iterate over a Set.
//for of loop can be used to iterate over the elements of a Set.

for (const value of mySet){
    console.log(value)
}
//Output:
// 1    
// 2
// 3
// 4
// 5

//What will be the output?

const newSet = new Set()
newSet.add({id:1})
newSet.add({id:1})
console.log(newSet.size)
//Output: 2
/*Explanation: Each object is a unique reference, so even though they have the same content, 
they are treated as different objects in the Set.*/

//Write code to clear all elements from a Set.
newSet.clear()
console.log(newSet)
//Output: Set {}

//What will be the output?

const mySet3 = new Set();
mySet3.add(1);
mySet3.add("1");
mySet3.add(1);
console.log(mySet3.size);

/*The Set treats 1 (number) and "1" (string) as different values. 
Although 1 is added twice, it is stored only once.*/

//What will be the output?

const fruits = new Set(["apple", "banana", "apple", "cherry"]);

console.log([...fruits]);
//Output: [ 'apple', 'banana', 'cherry' ]
//Explanation: The Set automatically removes duplicates, so only unique fruit names are stored.

//What will be the output?

const falseValues = new Set([NaN, NaN, "NaN"]);
console.log(falseValues);
//Output: Set { NaN, 'NaN' }
//Explanation: NaN is considered a unique value in JavaScript, so it appears only once in the Set.

