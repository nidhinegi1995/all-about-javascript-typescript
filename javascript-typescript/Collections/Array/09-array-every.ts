//Explain the every method with an example.

/*The every method tests whether all elements in the array pass the test implemented by the provided function. 
It returns a Boolean value.*/

let numbers=[4, 2, 32, 12];

let allEvenNumber=numbers.every((num:number)=>{return num%2===0})

console.log(allEvenNumber)// Output: true