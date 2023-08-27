/** @format */

//      ___________________________________________ OBJECT ORIENTED PROGRAMMING ________________________________________

// some descriptions:

// << WHAT IS OBJECT ORIENTED PROGRAMMING? >>

// OBJECT_ORIENTED_PROGRAMMING => is a programming paradigm based on the concept of objects

// We use objects to MODEL (Describe) real-world or abstract features;

// Objects may contain data (properties) and code (methods). By using objects, we pack DATA AND THE CORRESPONDING BEHAVIOUR into one block.

// In OOP, Objects are SELF_CONTAINED pieces/blocks of code;

// Objects are BUILDING BLOCKS of applications, and INTERACT with one another.

// Interactions happen through a PUBLIC INTERFACE (API): mehtods that the code OUTSIDE of the object can access and use to communicate with the object.

// OOP was developed with the goal of ORGANIZATION code to make it MORE FLEXIBLE AND EASIER TO MAINTAIN (avoid "spaghetti code")

// << CLASSES AND INSTANCES (Traditional OOP)

// Abstraction => Ignoring or hiding details that DONT MATTER, allowing us to get an OVERVIEW perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation

// Encapsulation => Keeping the properties and methods PRIVATE inside the class, so they are NOT ACCESSIBLE FROM OUTSIDE THE CLASS. Some methods can be EXPOSED as a public interface (API)

// Inheritance => Making all properties and methods of a certain class AVAILABLE TO A CHILD CLASS, forming a hierachial relationship between classes. This allows us to REUSE COMMON LOGIC and to model real-world relationships.

// Polymorphism => A child class can OVERWRITE a method it inherited from a parent class [it's more complex than that, but enough for out purpose].

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << OOP in JavaScript >>

// some description were added to the box-file folder

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Constructor functions and the new operator >>

// "use strict";

// // constructor functions always start with a capital letter
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // // Never do this
//   // this.calcAge = function(){
//   //   console.log(2037 - this.birthYear);
//   // }
// };

// const jonas = new Person("Jonas", 1991);
// console.log(jonas);
// // WHAT HAPPENS WHEN WE CREATE AND CALL A CONSTRUCTOR FUNCITON?
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person("matilda",2017);
// const jack = new Person("jack",1975);
// console.log(matilda,jack);

// console.log(jonas instanceof Person);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Protoypes  >>

// 'use strict';

// const Person = function(firstName,birthYear){
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }
// const jonas = new Person("Jonas",1991);
// const matilda = new Person("Matilda",2017);
// const jack = new Person("Jack",1975);
// console.log(jonas);
// console.log(matilda);
// console.log(jack);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function(){
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects

// Person.prototype.species = "Homo Sapiens";
// console.log(jonas,matilda);
// console.log(jonas.species,matilda.species);
// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Prototypal Inheritance and the prototype >>

// i'm having a summary of what jonas said but i cant figure it out exactly

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Prototypal Inheritance on Built-in Objects >>

// const Person = function (firstName, birthYear) {
//   // this is an constructor function
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const jonas = new Person("Jonas", 1975); // creating an object from the constructor function
// Person.prototype.species = "Homo Sapiens"; // created a species in the constructor function
// console.log(jonas.__proto__); // in here we just log the prototype to the console
// console.log(jonas); // so in here i just logged the species of the constructor function

// // Object.prototype {top of prototype chain}
// console.log(jonas.__proto__.__proto__); // in here we want to take a look at the prototype chaining
// console.log(jonas.__proto__.__proto__.__proto__); // this line of code will return as a null value because as the prototype chaining this will return a null value

// console.dir(Person.prototype.constructor);

// // prototype of the arrays
// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__); // by logging this line of code to the console we will figure out that all the array methods are lived inside the prototype and the array will inherit them by the prototype
// console.log(arr.__proto__ === Array.prototype);
// // when we create an array like the code above we can use a constructor function to create the array too like this: new Array === []
// console.log(arr.__proto__.__proto__); // this line of code will refer to the prototype chaining

// // we can write our own methods for the arrays like this:
// const arr2 = [2, 2, 3, 4, 5, 7, 7];
// // lets pretend we have a array with repeated elements
// // so now we want to have a array with unique values and we want to create that array using the self made method
// // we can do this:
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr2.unique()); // the output will be a unique array

// // i must add that for fun this way of adding a new method to the array's is good but in practice it's better not to use it this way and use the javaScript own methods

// const h1 = document.querySelector('h1');
// console.dir(h1); // when we take a look at the prototype of this element we will figure this out that it contains a big prototype chaining


// // now lets take a look at a simple function prototype 
// console.log(x => x + 1); // now if we take a look at this we will see that it contains all the methods that we can use for a function

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // << Coding Challenge #1 >>

// /* 
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// const Car = function(make,speed){
//   this.make = make;
//   this.speed = speed;
//   console.log(`${make} going at ${speed} km/h`);


// console.log("___ REGULAR OBJECTS ___");
// const firstCar = new Car("BMW",120 );
// const secondCar = new Car('Mercedes',95)
// Car.prototype.accelerate= function(){
//   this.speed += 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`); 
// }
// Car.prototype.brake = function(){
//    this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// console.log("___ TEST ___");
// firstCar.brake();
// firstCar.brake(); 
// firstCar.brake();
// firstCar.accelerate();
// firstCar.accelerate();

// // wrote it all by my own 

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << ES6 Classes >>

// // // class experession
// // const PersonCl = class {

// // }
// // // class declaration
// // class PersonCl {

// // }

// // its easier to use the class declaration
// class PersonCl {
//   constructor(firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to the .prototype property
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   }
//   greet(){
//     console.log(`hey ${this.firstName}`);
//   }
// }
// const jessica = new PersonCl("Jessica",1995)
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

// // we can write the function inside the constructor function manually like this: (but its better to be written inside the constructor function)

// // PersonCl.prototype.greet = function(){
// //   console.log(`hey ${this.firstName}`);
// // }

// jessica.greet(); // if we write the function manually or inside the constructor function they will have the exact same result 


// // SOME HINTS ABOUT THE CLASSES 

// // 1. Classes are NOT hoisted 

// // 2. Classes are first-class citizens => it means we can pass them into functions and  we can return them from the functions

// // 3. Classes are executed in strict mode

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Setters and Getters >>

// its very simillar to what we learned in the c++ language about the classes in a short description the getter will get the data and it includes parameters and the setter will set it in the class

const account = {
  owner : "Jonas",
  movemnets : [200,530,120,300],
  // now we want to add a getter to the object
  get latest(){
    return this.movemnets.slice(-1).pop(); // this line of code will return the last element of the array then it will remove the element from the array
  },
  // now we want to add a setter to the object
  set latest(mov){
    this.movemnets.push(mov); // this line of code will add a element to the array
  }
};
console.log(account.latest); // we will log it to the console as it was a property 
account.latest = 50;
console.log(account.movements); // now we can see that the element were added to the array

// now lets head back to the person class
class PersonCl {
  constructor(fullName,birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge(){
    console.log(`2037 - ${this.birthYear}`);
  }
  greet(){
    console.log(`Hey ${this.fullName}`);
  }
  get age(){
    return 2037 - this.birthYear;
  }
}
const jessica = new PersonCl("Jessica Davis",1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

// 7 minutes of the video get going on
