//How do you use the some method?

/*The some method tests whether at least one element in the array passes the test implemented by the provided function. 
It returns a Boolean value.*/

let numbers=[1, 2, 3, 4, 5];

let hasEvenNumber=numbers.some((num:number)=>{return num%2===0})

console.log(hasEvenNumber)// true