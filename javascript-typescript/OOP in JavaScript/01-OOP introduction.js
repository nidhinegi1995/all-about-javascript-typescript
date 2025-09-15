//What is Object-Oriented Programming

//A programming paradigm based on the concept of objects (real-world entities).
//Objects contain data (fields/properties) and behavior (methods/functions).
//Main goals: reusability, scalability, maintainability, abstraction of real-world problems.
//OOP is very useful on large scale projects, as it facilitates code modularity and organization.

//Key OOP Concepts

//1. Class

// A blueprint/template for creating objects.
// Defines properties (variables) and methods (functions).

//Example:

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  drive() {
    console.log(this.brand + " " + this.model + " is driving");
  }
}

//2. Object

// An instance of a class.
// Has its own values for class properties.

let car1 = new Car("Tesla", "Model X");
car1.drive(); // Tesla Model X is driving
let car2 = new Car("BMW", "X5");
car2.drive(); // BMW X5 is driving
