//JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint,
// number, and object.

//1. String

//Usage: Represents textual data.
//Reasoning: Used for storing and manipulating text, such as names, messages, and any other character-based data.

let name = "John Doe";
let message = "Hello, World!";

//2. number

// Usage: Represents numeric values.
// Reasoning: Used for mathematical calculations, counting, and any other scenario involving numbers.

let age = 25;
let price = 49.99;

//3. bigint

// Usage: Represents arbitrary-precision integers.
// Reasoning: Used when dealing with large integer values that exceed the maximum safe integer value for regular numbers.

let bigIntValue = 9007199254740992;

//4. symbol

//A Symbol is a primitive data type introduced in ES6 that is used to create unique and immutable identifiers.

const uniqueId = Symbol("id");
//Even if two symbols have the same description, they are not equal.
const anotherUniqueId = Symbol("id");
console.log(uniqueId === anotherUniqueId); // false

//Why use Symbol?
//Symbols are often used to add unique property keys to objects, ensuring that they do not conflict with other properties.
//To create hidden properties or methods in objects that should not be accessed or modified directly by external code.

//using symbol as a property key
const id = Symbol("id");
const user = {
    [id]: 12345,
    name: "Alice",
    age: 30
};

console.log(user); // { [Symbol(id)]: 12345, name: 'Alice', age: 30 }

console.log(user[id]); // 12345

//5. boolean

// Usage: Represents true or false values.
// Reasoning: Used for conditions and logical operations.


let isLogged = true;
let hasPermission = false;

//6. Object

// Usage: Represents a collection of key-value pairs.
// Reasoning: Used to group related data and functions together.

let person = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};

//7. Undefined

// Usage: Represents a variable that has been declared but not assigned a value.
// Reasoning: Typically used as the default value of variables before they are assigned.

let uninitializedVariable;

//8. Null

// Usage: Represents the absence of any object value.
// Reasoning: Often used to intentionally indicate the absence of an object or value.

let emptyValue = null;


