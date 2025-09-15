//Map vs Object in JavaScript
// Map is a collection of key-value pairs where keys can be of any type
// Object is a collection of key-value pairs where keys are strings or symbols
// Order: Map maintains the insertion order of keys, while Object does not guarantee any specific order
// Size: Map has a size property, while Object does not have a built-in size property. For Object, you can use Object.keys(obj).length to get the size.
// Iteration: Map can be iterated directly using forEach or for...of, while Object requires Object.keys() or Object.entries() for iteration.
// Performance: Map generally performs better for frequent additions and removals of key-value pairs, while Object is faster for static/dictionary-like key-value structures.
//Prototype: Map does not inherit from Object.prototype, while Object does. This means that Map does not have methods like toString, hasOwnProperty, etc.
//Serialization: Map cannot be directly serialized to JSON, while Object can be easily serialized using JSON.stringify().

//When to use Map vs Object?
//Use object: When you have structured data with fixed keys, or when you need to use methods like JSON.stringify().
//Use Map: When you need a collection of key-value pairs with dynamic keys, require insertion order, or need to frequently add/remove entries.

//Example of object

const obj = {
  name: 'Alice',
  age: 30,
  isActive: true
};

console.log(obj.name); // Alice
console.log(obj['age']); // 30
console.log(obj.isActive); // true

//Example of Map

const map1 = new Map();
map1.set('name', 'Alice');
map1.set('age', 30);
map1.set('isActive', true);

console.log(map1.get('name')); // Alice
console.log(map1.get('age')); // 30
console.log(map1.get('isActive')); // true

