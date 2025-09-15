//1. Encapsulation

//Encapsulation stands for an object's capacity to "decide" which information it exposes to "the outside" and which it doesn't. 
//Encapsulation is implemented through public and private properties and methods.	

//In JavaScript, all objects' properties and methods are public by default. "Public" just means we can access an object's property/method from outside its own body:

//Example:
class Enemy {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} took ${amount} damage. Health is now ${this.health}.`);
  }
}

const goblin = new Enemy("Goblin", 100);
goblin.takeDamage(20); // Goblin took 20 damage. Health is now 80.

//Private
class Enemy {
  #name;
  #health;

  constructor(name, health) {
    this.#name = name;
    this.#health = health;
  }

  takeDamage(amount) {
    this.#health -= amount;
    console.log(`${this.#name} took ${amount} damage. Health is now ${this.#health}.`);
  }
}

const goblin2 = new Enemy("Goblin", 100);

//But if we try to access the property directly, we'll get an error. And the private property won't show up if we log the object.

console.log(goblin2.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
console.log(goblin2); // Enemy { }

//Encapsulation is useful in cases where we need certain properties or methods for the inner working of the object, but we don't want to expose that to the exterior. Having private properties/methods ensures we don't "accidentally" expose information we don't want.