/*As per conventions, functions associated with an object are known as methods. 
This is considered to be a small difference between a function and a method. 
A function is an independent sequence of a bunch of statements whereas a method is associated with an 
object and is generally referenced by this keyword. */

//In JavaScript, the this keyword refers to an object.

let obj4 = {
    name:"Nikki",
    age: 28,
    greet : ()=>{
        console.log(`Hi, my name is ${this.name} and my age is ${this.age}. Welcome to My JS/TS notes.`)
    }
}

obj4.greet(); // Hi, my name is undefined and my age is undefined. Welcome to My JS/TS notes.

//Defining Global Variables to be associated with Objects:

// Define Function Explicitly.
let greet1 = () => {
    console.log("Hey There!")
}

//hasOwnProperty() - Checks if a akey exists in an object

obj4.hasOwnProperty("name")

