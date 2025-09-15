//A regular expression is a special sequence of characters that defines a search pattern, 
// typically used for pattern matching within text. It's often used for tasks such as validating email addresses, 
// phone numbers, or checking if a string contains certain patterns (like dates, specific words, etc.).

// The /i flag makes the pattern case-insensitive



const regex = /Hello/i

console.log(regex.test("hello"))

console.log(regex.test("HELLO"))

//Output:
// true 
// true

//Without /i flag:

const regex1 = /Hello/

console.log(regex1.test("hello"))

console.log(regex1.test("HELLO"))

console.log(regex1.test("Hello"))

//Output:
// false    
// false
// true

//Creating a RegExp in JavaScript
// There are two primary ways to create a RegExp in JavaScript

// 1. Using the RegExp Constructor

//The RegExp constructor is useful when you need to create a regular expression dynamically, 
// such as when the pattern or flags might change based on user input or other conditions.

let pattern = "hello"; //pattern to match
let flags = "i"; //case-insensitive flag

let regex2 = new RegExp(pattern, flags);

let s = "Hello World";

console.log(regex2.test(s))
//Output: true

//2. Using Regular Expression Literal

//This is the most common and simple way to create a regular expression in JavaScript. 
// It’s especially useful when the pattern is static (doesn’t change dynamically).

let regex3 = /hello/i;

let testString = "Hello world";

console.log(regex3.test(testString));

//Output: true