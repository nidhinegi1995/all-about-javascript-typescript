//JSON (JavaScript Object Notation) is a handy way to share data. It's easy for both people and computers to understand.
// In JavaScript, JSON helps organize data into simple objects.
//It is widely used for transmitting data between a server and web application as a text string.

const person = {
  "name": "John",
  "age": 30,
  "city": "New York"
};

// Accessing for particular detail
console.log(person.name); // Output: John
console.log(person.age);  // Output: 30

//Looping through JSON Object

let myOrder, a;

myOrder = {
    "name_of_product": "earbuds",
    "cost": "799",
    "warranty": "1 year"
};

for (a in myOrder) {

    // Accessing object in looping
    // using bracket notation
    console.log(myOrder[a]);
}

//Output:
// earbuds
// 799
// 1 year

//Converting a JSON Text to a JavaScript Object

//To convert a JSON text to a JavaScript object, you can use the JSON.parse() method.

const jsonString = '{"name": "GFG", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); 
console.log(jsonObject.age); // Output: GFG, 30

//difference between JSON and JavaScript Object
//JSON is a string representation of data, while a JavaScript object is a data structure that can be manipulated directly in code.
//JSON is used for data interchange, while JavaScript objects are used for storing and manipulating data
//JSON is always in double quotes, while JavaScript objects can use single or double quotes for keys and values.
//JSON is a text format that is language-independent, while JavaScript objects are specific to the JavaScript programming language.
//JSON is parsed into JavaScript objects using JSON.parse(), while JavaScript objects can be created directly in code.
//JSON is often used for data exchange between a server and a web application, while JavaScript objects are used for data manipulation within the application.