//Inheritance

//Inheritance is the ability to create classes based on other classes. With inheritance, we can define a parent class (with certain properties and methods), and then children classes that will inherit from the parent class all the properties and methods that it has.

//Example:

    class Hero {
        constructor(name, power) {
            this.name = name;
            this.power = power;
        }

        usePower() {
            console.log(`${this.name} uses ${this.power}!`);
        }
    }

    class Mage extends Hero {
        constructor(name, power, mana) {
            super(name, power); // use super(power)
            this.mana = mana;
        }

        castSpell() {
            if (this.mana > 0) {
                console.log(`${this.name} casts a spell with ${this.power}!`);
                this.mana--;
            } else {
                console.log(`${this.name} is out of mana!`);
            }
        }
    }

    const wizard = new Mage("Gandalf", "Fireball", 3);
    wizard.usePower(); // Gandalf uses Fireball!
    wizard.castSpell(); // Gandalf casts a spell with Fireball!



class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} took ${amount} damage. Health is now ${this.health}.`);
  }
}

class Warrior extends Character {
  constructor(name, health, armor) {
    super(name, health);
    this.armor = armor;
  }

  takeDamage(amount) {
    const damage = amount - this.armor;
    super.takeDamage(damage > 0 ? damage : 0);
  }
}

const knight = new Warrior("Knight", 100, 5);
knight.takeDamage(20); // Knight took 15 damage. Health is now 85.

//We use the constructor method to receive parameters and assign them as properties, and methods are declared like simple functions.

//On the children class, we use the extends keyword to declare the parent class we want to inherit from. 
//Then on the constructor method, we have to declare the "power" parameter and use the super function to indicate that property is declared on the parent class.

//Some things to keep in mind about inheritance:
// A class can only have one parent class to inherit from. You can't extend multiple classes, though there're are hacks and ways around this.
// You can extend the inheritance chain as much as you want, setting parent, grandparent, great grandparent classes and so on.
// If a child class inherits any properties from a parent class, it must first assign the parent properties calling the super() function before assigning its own properties.
// When inheriting, all parent methods and properties will be inherited by the children. We can't decide what to inherit from a parent class
// Children classes can override the parent's properties and methods.
