//JavaScript classes provide a structured way to create objects with shared properties and methods. 
// They support inheritance, encapsulation, and modularity, making it easier to write object-oriented code.


//Syntax for defining a class
class ClassName {
    constructor(){
        //initialise properties here;
    }
    methodName (){
        //method code
    }
}

//The class keyword is used to declare a class.
// The constructor() method is a special method that is automatically called when an instance of the class is created.
// You can define methods inside the class to provide behaviour for objects created from the class.

class Car{
    constructor(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    }
    startEngine (){
        console.log(`Engine started for ${this.brand} ${this.model}`)
    }
}

const car1 = new Car('Hyundai', 'i10', 2020)

car1.startEngine()

// Output: Engine started for Hyundai i10

//Key Features of JavaScript Classes
// Encapsulation: Bundles data (properties) and behaviour (methods) together.
// Constructor Method: Initializes properties when an object is created.
// Inheritance: Allows one class to inherit properties and methods from another.
// Code Reusability: Enables the creation of multiple instances with shared functionality.
// Simplicity & Clarity: Provides a clear structure for creating and managing objects.

//Inheritance in Classes
// Inheritance allows one class to extend another, inheriting its properties and methods while adding or overriding functionality.

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    di() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}

class ElectricCar extends Car{
  constructor(make, model, year, batteryLife){
    super(make, model, year);
    this.batteryLife = batteryLife;
  }
  d() {
    console.log(`batteryLife: ${this.batteryLife} hours`)
  }
}

let tesla = new ElectricCar("Tesla", "Model S", 2022, 24);
tesla.d()
tesla.di()

// Output:

// batteryLife: 24 hours
// 2022 Tesla Model S

//ElectricCar inherits from Car, using super to set properties and adds batteryLife and d method.
// An instance (tesla) calls both di to display car details and d to show battery life.

//Creating Multiple Objects from a Class
// Using classes to create multiple objects with the same structure but different data.

let c1 = new Car("Toyota", "Corolla", 2021);
let c2 = new Car("Honda", "Civic", 2020);
c1.d();
c2.d();

// Output:
// 2021 Toyota Corolla
// 2020 Honda Civic

//Two Car instances (c1 and c2) are created, and d is called on both to show their details.