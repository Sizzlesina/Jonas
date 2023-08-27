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

 // gotta watch the section again
 

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Prototypal Inheritance on Built-in Objects >>

