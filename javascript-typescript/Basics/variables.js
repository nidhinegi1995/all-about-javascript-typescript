//JavaScript Variables

//Variables in JavaScript can be declared using var, let, or const. 
//JavaScript is dynamically typed, so variable types are determined at runtime without explicit type definitions.

//Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

var a = 10     // Old style
let b = 20;    // Prferred for non-const
const c = 30;  // Preferred for const (cannot be changed)

console.log(a);
console.log(b);
console.log(c);

//Output:
// 10
// 20
// 30

//Best Practice
// Write variable names in JavaScript in camelCase. 

// Examples:

// var someVariable;
// var anotherVariableName;
// var thisVariableNameIsSoLong;

//Declaring Variables in JavaScript

//1. JavaScript var keyword

// var is a keyword in JavaScript used to declare variables and it is Function-scoped and hoisted, 
// allowing redeclaration but can lead to unexpected bugs.

//When a variable is function-scoped, it only exists inside the function in which it is declared — not in a block like if or for.
// example:
function test() {
    if (true) {
        var name = "Nikki";
    }
    console.log(name); // ✅ "Nikki" — still accessible here
}

test();
console.log(name); // ❌ ReferenceError — not available outside the function

//Hoisting means JavaScript moves the declaration part of variables to the top of their scope before the code runs — but not the value assignment.

//Example of hoisting:
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
var x = 5; // Declaration is hoisted, but not the assignment
console.log(x); // ✅ 5 — now accessible after assignment

//What JavaScript actually does internally:

var myVar;           // Declaration is hoisted
console.log(myVar);  // undefined
myVar = 10;          // Assignment happens here
console.log(myVar);  // 10

//That’s why you can reference a var before its declaration without getting a ReferenceError (you’ll just get undefined).
//In an ideal world, — if you try to use a variable before declaring it, you’d expect a ReferenceError.

//Redeclaration in var:

var camper = "James";
var camper = "David";
console.log(camper);//David
//Redeclaring a variable with var does not throw an error, but it can lead to bugs if not managed carefully.

//2. JavaScript let keyword

//let is a keyword in JavaScript used to declare variables and it is Block-scoped and not hoisted to the top, suitable for mutable variables.

//Block-Scoped means that the variable is only accessible within the block (e.g., inside an if statement or a loop) in which it is declared.
//Example:
if (true) {
    let name = "Nikki";
    console.log(name); // ✅ "Nikki" — accessible here
}   
console.log(name);// ❌ ReferenceError — not available outside the block

//Hoisting with let:
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10; // Declaration is hoisted, but not the assignment
console.log(y); // ✅ 10 — now accessible after assignment

//What JavaScript actually does internally:
let myLet;          // Declaration is hoisted
console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
myLet = 20;        // Assignment happens here
console.log(myLet); // 20       

//Redeclaration in let:
let camperLet = "James";
// let camperLet = "David"; // ❌ SyntaxError: Identifier 'camperLet' has already been declared
camperLet = "David"; // ✅ Allowed, as it is not a redeclaration
console.log(camperLet); // David

//3. JavaScript const keyword

//const is a keyword in JavaScript used to declare variables and it is Block-scoped, immutable bindings that can't be reassigned, though objects can still be mutated.

// const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
// They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

const FAV_PET = "Cats";
FAV_PET = "Dogs";

// The console will display an error due to reassigning the value of FAV_PET.


// Variable Scope in JavaScript
// Scope determines the accessibility of variables in your code. JavaScript supports the following types of scope:

// 1. Global Scope
// Variables declared outside any function or block are globally scoped. While var, let, and const 
// can all have global scope when declared outside a function, their behavior differs.

var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am global too";



//2. Function Scope
// Variables declared inside a function are accessible only within that function. This applies to var, let, and const:

function test() {
    var localVar = "I am local";
    let localLet = "I am also local";
    const localConst = "I am local too";
}
console.log(localVar); // Error: not defined

//3. Block Scope
// Variables declared with let or const inside a block (e.g., inside {}) are block-scoped, 
// meaning they cannot be accessed outside the block. var, however, is not block-scoped and will leak outside the block.

{
    let blockVar = "I am block-scoped";
    const blockConst = "I am block-scoped too";
}
console.log(blockVar); // Error: not defined