//How do you add dynamic key values in an object?

let dynamicKey = "age";
let dynamicValue = 29;

let user = {};

// Add dynamic key-value pair to the object
user[dynamicKey]=dynamicValue

console.log(user)

//What will be the output?

const obj = {
    a: 1,
    b: 2,
    a: 3,
}
console.log(obj);

//Output { a: 3, b: 2 }

//Create a function multiplyByTwo(obj) that multiply all the numeric values of nums by 2.

let nums = {
    a:100,
    b:200,
    title:"multiply by two"
}

let multiplyByTwo = (obj) => {
    for(let value in obj){
        if(obj[value]==='number')
        obj[value] *= 2
    }
}

multiplyByTwo(nums)
console.log(nums)

//output: 

//What will be the output?

const obj1 = {};
const obj2 = { key: "b" };
const obj3 = { key: "c" };
obj1[obj2] = 123;
obj1[obj3] = 234;
console.log(obj1[obj2]);

//Output: 234

/*Explanation: In this code, when you use objects 'obj2' and 'obj3' as keys in the object 'obj1', 
JavaScript automatically converts these objects into strings using the 'toString()' method. 
Since both 'obj2' and 'obj3' are objects, their default string representation is '"[object Object]"'. 
This means both 'obj1[obj2] = 123' and 'obj1[obj3] = 234' actually assign values to the same key: '"[object Object]"'. 
As a result, the second assignment ('obj1[obj3] = 234') overwrites the first one. Therefore, 
when you log 'obj1[obj2]', it will return '234', because both 'obj2' and 'obj3' resolve to the same key 
'"[object Object]"'. The final object 'obj1' will look like '{ "[object Object]": 234 }'.*/

//What is JSON.stringify() and JSON.parse() and where do we use it?

/*JSON.stringify() and JSON.parse() are methods used for converting JavaScript objects to JSON strings and 
vice versa. JSON.stringify() is used to serialize JavaScript objects into JSON strings, typically when sending 
data over a network or storing it. JSON.parse() is used to deserialize JSON strings back into JavaScript objects, 
often when receiving data from a server. */

//What will be the output?

console.log([..."GFG"]);

//[ 'G', 'F', 'G' ]

//What will be the output?

const obj1 = { name: "GFG", age: 14 };
const obj02 = { alpha: "rule", ...obj1 };
console.log(obj02);

//output:{ alpha: 'rule', name: 'GFG', age: 14 }

//What will be the output?

const obj03 = {
    name: "GFG",
    level: 4,
    company: true,
}
const res = JSON.stringify(obj03, ["name", "level"]);
console.log(res);

//Output: {"name":"GFG","level":4}

/*Explanation: In this code, the JSON.stringify() method is used to convert the obj object into a JSON string. 
The second argument passed to JSON.stringify() is an array of keys (["name", "level"]), which acts as a replacer. 
This means only the properties specified in the array will be included in the resulting JSON string.*/

//What will be the output?

const operation = {
    value: 20,
    multi() {
        return this.value * 10;
    },
    divide: () => this.value / 10,
};

console.log(operation.multi());
console.log(operation.divide());

//Output: 200
//NaN

/*Explanation: In this code, the "multi" method works correctly because it uses a regular function, where "this" 
refers to the "operation" object, allowing it to access "this.value" and return "200". However, the "divide" 
method is an arrow function, which lexically binds "this" to the surrounding context, not the "operation" object. 
In a browser, "this" inside the arrow function refers to the global object, which doesn't have a "value" property, 
so "this.value" is "undefined". As a result, "this.value / 10" results in "NaN" because "undefined" divided by 10 
is not a valid number.*/

//What will be the output?

// function Items(list, ...param, list2) {
//     return [list, ...param, list2];
// }
// Items(["a", "b"], "c", "d");

/*Explanation: The code you provided will result in a syntax error because of the way the parameters are 
structured in the function definition. In JavaScript, the rest parameter (...param) must be the last parameter 
in the function definition, but in your code, it is placed before list2, which is not allowed.*/

//What will be the output?

let obj1 = { name: "GFG" };
let obj002 = obj1;
obj1.name = "GeeksForGeeks";
console.log(obj002.name);

//Output: GeeksForGeeks

/*Explanation: Both obj1 and obj2 are pointing to the same object, so when the name property of obj1 is changed 
to "GeeksforGeeks" that change is reflected in obj2 as well. Therefore, obj2.name will output "GeeksforGeeks".*/

//What will be the output?

let obj1 = { name: "GFG" };
let objo2 = [obj1];
obj1 = null;

console.log(objo2);

//Output:[ { name: 'GFG' } ]

/*Explanation: After obj1 is set to null, obj2 still retains the reference to the object, 
so obj2 will output the array containing the object { name: "GFG" }. 
The change to obj1 does not affect the obj2 array because arrays and objects in JavaScript are reference types, 
and obj2 is still holding the reference to the original object.*/

//What will be the output?

let obj00 = { num: 2 };
const fun = (x = { ...obj00 }) => {
    console.log((x.num /= 2));
}

fun();
fun();
fun(obj00);
fun(obj00);

/*Explanation: The first two calls to fun() create a new object each time (because of the spread operator), 
and x.num is divided by 2, logging 1 both times. The last two calls pass the original obj as the argument. 
Since objects are passed by reference, obj is modified directly, first to { num: 1 } and then to { num: 0.5 }. 
Thus, 1 and 0.5 are logged accordingly.*/

//What is shallow copy and deep copy?

/*A shallow copy creates a new object that shares references to the original object's nested elements, 
so changes to those elements affect both objects. A deep copy creates a completely independent copy, 
duplicating all nested objects to avoid shared references.*/


//How to deep copy or clone the given object?

/*To deep copy or clone an object in JavaScript, you can use JSON.stringify() and JSON.parse() methods. 
This approach serializes the object into a JSON string and then parses it back into a new object, 
ensuring that nested objects are also copied, rather than just copied by reference.*/

const original = { name: "John", address: { city: "New York", zip: 10001 } };
const cloned = JSON.parse(JSON.stringify(original));

cloned.address.city = "Los Angeles";

console.log(original.address.city); 
console.log(cloned.address.city);

//Output:New York
// Los Angeles

//In Javascript, how do you turn an Object into an Array[]?

let objo1: {id:"1", name: "user22", age: "26", work: "programmer"}

//Method1: Convert the keys to array using Object.keys()

console.log(Object.keys(objo1))
//["id", "name", "age", "work"]

//Method2: Convert the values to array using - Object.values()

console.log(Object.values(objo1))
//["1", "user22", "26", "programmer"]

//Method3 : Convert both keys and values using - Object.entries()

console.log(Object.entries(objo1))
//[["id","1"], ["name","user22"], ["age", "26"], ["work", "programmer"]]