//Polymorphism

//Polymorphism means "many forms" and is actually a simple concept. 
//It's the ability of one method to return different values according to certain conditions.

class Animal {
  speak() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows");
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.speak());

//Output:
// The dog barks
// The cat meows

//Q. What is method overloading and method overriding?

//Method Overloading
// Definition: Having multiple methods with the same name but different parameter lists (number/type of parameters).

// Key point: Happens within the same class.

// Resolved at: Compile time (a.k.a. compile-time polymorphism).


// Method Overriding
// Definition: A subclass provides a new implementation of a method already defined in its parent class, with same method name, parameters, and return type.

// Key point: Happens across parent-child classes.

// Resolved at: Runtime (a.k.a. runtime polymorphism).