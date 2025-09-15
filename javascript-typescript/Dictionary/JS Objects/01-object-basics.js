//What is an object?
// An object is a collection of key-value pairs. Values can be of any data type, including other objects or functions(methods).
//Keys are strings or Symbols, and they are used to access the values in the object.
//Used to represent real-world entities and their properties. 
//Used to store structured data and functionality in a single entity.

//Creating Objects:

/*In JavaScript, Objects can be created using two different methodologies namely 
Literal Form and 
Constructed Form.*/

/*Literal Form: The literal form uses the construction of object literals that can be said as a collection of
key-value pairs enclosed within a pair of curly braces. The syntactical form is shown below. */

const obj = {
    key1: "value1",
    key2: "value2"
}

/*Constructed Form: The constructed form uses either an object constructor function or the new keyword to create
an empty object and then adds properties to the object one by one. The syntactical forms are shown below.*/

//Using Object Constructor Function:

/*In this methodology, the user creates an explicit function to take required values as parameters and assign them 
as the properties of the desired object.*/

/*In JavaScript, an object constructor function is a way to create multiple objects with the same structure
 or blueprint — like a mini factory.*/

/*Instead of writing separate objects every time, we create one function that takes values and sets properties
dynamically using this.*/

/*📦 Example:
Suppose you're making multiple person objects.

Instead of doing this manually:

let person1 = { name: "Nikki", age: 28 };
let person2 = { name: "Raj", age: 30 };

You can create a constructor function:*/

function Person(this, name, age) {
    this.name = name;
    this.age = age;
}
// Now you can create new person objects easily:
let personA = new Person("Nikki", 28);
let personB = new Person("Raj", 30);

console.log(personA);// Person { name: 'Nikki', age: 28 }
console.log(personB);// Person { name: 'Raj', age: 30 }

//Using the new keyword:

/*In this methodology, the user creates an empty object using the new keyword and then adds properties to the object
one by one.*/

const obj2 = new Object();
obj2.key1 = "value1";
obj2.key2 = "value2";
obj.name = "John";
obj.age = 30;

//Deleting Object Properties:

obj2.key1 = "value1";
obj2.key2 = "value2";   
// To delete a property from an object, use the delete operator.
delete obj2.key1;   

//Content of Objects:

/*JavaScript objects consist of a set of key-value pairs, which are known as Properties. 
All Properties are named in JavaScript objects and the key part represents the Property name, 
while the value part represents the property Value. The Property Value can be of the primitive data type or an object 
or even a function. The property can also be globally accessible in spite of being owned by an object.*/

//The general syntax of defining an object property is as shown below,
//objectName.propertyName = propertyValue;

let obj3 = {
    int_prop : 5,
    str_prop : "Nikki",
    obj_prop : new Date(),//returns current date and time in ISO format of the form YYYY-MM-DDTHH:mm:ss.sssZ which is UTC time
    inner_obj_prop : {
        int_prop : 6
    },
    function_prop : ()=>console.log("Welcome to Nidhi's Notes"),
}
obj3.name = "Nikki"

console.log(obj3)

//Output:
/* {
  int_prop: 5,
  str_prop: 'Nikki',
  obj_prop: 2025-07-24T06:46:02.538Z,
  inner_obj_prop: { int_prop: 6 },
  function_prop: [Function: function_prop],
  name: 'Nikki'
}*/

//Accessing Object Properties from dot notation:

console.log(obj3. int_prop)
console.log(obj3.str_prop)
console.log(obj3.obj_prop.toLocaleTimeString())
console.log(obj3.inner_obj_prop.int_prop)
obj3.function_prop()

//Output:
/*
5
Nikki
7:14:52 AM
6
Welcome to Nidhi's Notes
*/

//Accessing nesting objects
//The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

//Here is a nested object:

const ourPets2 = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets2[0].names[1];
ourPets2[1].names[0];
// ourPets2[0].names[1] would be the string Fluffy, and ourPets2[1].names[0] would be the string Spot.

const person1 = {
name: "Nidhi",
age: 28,
}

function greet() {
  console.log(`Hello! My name is ${person1.name} and I'm ${person1.age} years old.`);
}

const person02 = {
  name: "Alex",
  age: 22,
  greet: function () {
    console.log(
      `Hello! My name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

person02.greet();

//JavaScript this Keyword

//The 'this keyword' in JavaScript refers to the object to which it belongs. 
// Its value is determined by how a function is called, making it a dynamic reference. 
// The 'this' keyword is a powerful and fundamental concept used to access properties and methods of an object, 
// allowing for more flexible and reusable code.

const personGFG = {
    name: "Nidhi's Notes",
    greet() {
        return `Welcome To, ${this.name}`;
    }
};
console.log(personGFG.greet());

//Output: Welcome To, Nidhi's Notes

//There are more ways to use this keyword in JavaScript:

//Using this in a Method

const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello, my name is ' +
            this.name + ' and I am '
            + this.age +
            ' years old.');
    }
};

person.greet();

//Output: Hello, my name is John and I am 30 years old.







