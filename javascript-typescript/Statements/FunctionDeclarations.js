//Function Declarations

//A function declaration is a statement that defines a function in JavaScript. 
// Functions are reusable blocks of code designed to perform specific tasks.

function greet(name){
    return console.log("Hello " + name);
}

greet("Nidhi")

//Output: Hello Nidhi

//JavaScript Arrow Function

// Arrow functions are a shorter and more concise way to write functions in JavaScript.
// They use the => syntax to define the function.
// They are especially useful for short functions or when writing code with functional programming style.


let myFunction = (a, b) => a * b;

hello = (name) => {
    return console.log("Hello " + name);
}

//Arrow Functions Return Value by Default:
// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
hello = () => "Hello World!";
// Note: This works only if the function has only one statement.

//Arrow Function With Parameters:
hello = (val) => "Hello " + val;

//Handling of this Keyword in Arrow Functions:
//In arrow functions, there are no binding of this.
// The value of this is determined by the surrounding lexical context, not by how the function is called.
// This means that arrow functions do not have their own this context, making them useful for methods that need to access the surrounding context.
//Example:
const person = {
    name: "Nidhi",
    age: 28,
    greet: () => {
        console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
    }
};

person.greet(); // Output: Hello! My name is undefined and I'm undefined years old.
// Note: In this case, `this` does not refer to the `person` object, but to the global context, which is why it outputs `undefined`.
// To correctly use `this` in an arrow function, you would need to use a regular function instead:
const personCorrect = {
    name: "Nidhi",
    age: 28,
    greet() {
        console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
    }
};

personCorrect.greet(); // Output: Hello! My name is Nidhi and I'm 28 years old.