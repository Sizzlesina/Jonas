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

// // << Setters and Getters >>

// // its very simillar to what we learned in the c++ language about the classes in a short description the getter will get the data and it includes parameters and the setter will set it in the class

// const account = {
//   owner: "Jonas",
//   movemnets: [200, 530, 120, 300],
//   // now we want to add a getter to the object
//   get latest() {
//     return this.movemnets.slice(-1).pop(); // this line of code will return the last element of the array then it will remove the element from the array
//   },
//   // now we want to add a setter to the object
//   set latest(mov) {
//     this.movemnets.push(mov); // this line of code will add a element to the array
//   },
// };
// console.log(account.latest); // we will log it to the console as it was a property
// account.latest = 50;
// console.log(account.movements); // now we can see that the element were added to the array

// // now lets head back to the person class
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(`2037 - ${this.birthYear}`);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // Set a property thath already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(" "))
//       this._fullName =
//         name; // becasuse the constructor function and the setter are store the exact same thing we need to write a "_" before the parameter name to identify that to the javascript that these are diffrent variable name
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }
// const jessica = new PersonCl("Jessica Davis", 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// const walter = new PersonCl("Walter White", 1965);
// // if we write only the name it will give us an error that this is not a full name

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Static Methods >>

// "use strict";
// // this is an constructor function
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person("Jonas", 1991);
// console.log(jonas);

// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Jack", 1975);

// console.log(jonas instanceof Person);

// console.log(Array.from(document.querySelectorAll("h1"))); // in here we will see that the "for" is a function but its a function that attached to the Array object
// console.log(Number.parseFloat(12)); // in here too we can see that the parseFloat is a function but its a function which attached to the Number object
// // and i think these kind of methods are called "Static Methods"

// // so we wanna use the same method for our constructor function which goes like this:

// Person.hey = function () {
//   console.log("Hey there👋");
//   console.log(this);
// };
// Person.hey(); // we can call the method like this but this method is not inherited soooo...??!

// // jonas.hey(); // can we inherit the function to the jonas object like this? NO

// // now we want to add a static method to our class

// class newClass {
//   // constructor function
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Static method
//   static hey() {
//     console.log("Hey there!👋");
//     console.log(this);
//   }
//   // Get and Set - Instance method
//   get age() {
//     return 2037 - this.age;
//   }
//   set fullName(name) {
//     return (this._fullName = name);
//   }
//   get fullName() {
//     return this._fullName; // because its repetable we must use (_)
//   }
//   // Regular functions - Instance methods
//   caclAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }
// const sina = new newClass("sina pooshideroo", 2000);
// console.log(sina);

// newClass.hey(); // we can call the static method like this

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Object.create >>

// // third way of implementing prototypal inheritance or delegation

// 'use strict';
//  const PersonProto = {
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//  }

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// // we want to use a funciton in our object to do the storing of the name and birthYear for us so we add the init function
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// // now that we add the function inside the object we can do this:

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah",1979);
// sarah.calcAge();

// // i thought that we can use the methods chaining on the prototype's but we can't

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Coding Challenge #2 >>

// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */

// class car {
//   constructor(make,speed){
//     this.make = make;
//     this.speed = speed;
//     console.log(`${make} going at ${speed} km/h`);
//   }
//   accelerate(speed){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake(){
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed} km/h`);

//   }
//   get speedUS(){
//     return `${this.speed / 1.6} mi/h`
//   }
//   set speedUS(speedUS){
//     this.speed = speedUS * 1.6;
//   }
// }

// const car1 = new car("BMW",120);
// console.log(car1.speedUS);
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.speedUS = 50;
// console.log(car1);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Inheritance between classes and constructor functions >>

// 'use strict';

// const Person = function(firstName,birthYear){
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function(){
//   console.log(2037 - this.birthYear);
// }

// const Student = function(firstName,birthYear,course){
//   Person.call(this,firstName,birthYear);
//   this.course = course;
// }

// // Linking Prototypes
// Student.prototype = Object.create(Person.prototype); // with this line of code we will inherit the person to the student object

// // we cant inherrit the prototype like this:
// // Student.prototype = Person.prototype; // this will copy the exact prototype into each other

// Student.prototype.introduce = function(){
//   console.log(`Hey my name is ${this.firstName} and i study ${this.course}`);
// }

// const mike = new Student("Mike",2020,"Computer Science")
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.dir(Student.prototype.constructor); // when we log htis line of code to the console the javascript will return the person constructor and to fix that we can use this line of code:
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
// // now the problem fixed

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Coding Challenge #3 >>

// /*
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
// */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo;
// }

// EV.prototype.accelerate = function(){
//   this.speed += 20;
//   this.charge--;
//   console.log(`${this.make} is going at ${this.speed} km/h. with a charge of ${this.charge}`);
// }
// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Inheritance between classes - ES6 CLASSES >>

// 'use strict';

// class PersonCl {
//   constructor(fullName,birthYear){
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   }
//   greet(){
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age(){
//     return 2037 - this._birthYear;
//   }
//   set fullName(name){
//     if(name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName(){
//     return this._fullName
//   }

//   // Static method
//   static hey(){
//     console.log(`Hey there!👋`);
//   }
// }
// // we want to make the student class to inherit the person class
// // now for that we should do this:

// class StudentCl extends PersonCl {
//   constructor(fullName,birthYear,course){
//     // PersonCl.call(this,fullName,birthYear)  // // we shouldnt do this line of code like before instead we can do this:

//     // this always need to happens first!
//     super(fullName,birthYear);
//     // this line of code will do the work of the code above but it will do that automatically

//     this.course = course;  // if we dont want any new properties in our constructor function then we can delete this line of code
//   }
//   introduce(){
//     console.log(`My name is ${this.fullName} and i study ${this.course} `);
//   }
//   //we want to overwrite the calcAge function in here :
//   calcAge(){
//     console.log(`I am ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear - 10}`);
//   } // now this function will work and the one in the perosn class wont work

//   // HINT : When we overwriting a function in a class which inherits a class the new function will work and the old one wont work
// }

// const martha = new StudentCl("Martha Jones",2012,"Computer Science");
// martha.introduce();
// martha.calcAge();
// console.log(martha.__proto__.__proto__); // in this line of code we can see that the prototype chaining is have access to the calcAge function by using the "extends" keyword

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Inheritance between classes - Object.create >>

// 'use strict';
// const PersonProto = {
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// // this line of code will create a new person object using Object.create
// const steven = Object.create(PersonProto);

// // now we gonna make student inherit directly from the person:
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName,birthYear,course){
//   PersonProto.init.call(this,firstName,birthYear);
//   this.course = course;
// }
// StudentProto.introduce = function(){
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }
// // now we can use the StudentProto to create new students
// const jay = Object.create(StudentProto);
// jay.init("Jay",2010,"Computer Science");
// jay.introduce();
// jay.calcAge(); // this function is inherited by the PersonProto

// // 👆 the Student Object now is the proto of jay and the PersonProto in the prototype chaining will be the parent of jay

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Another class example >>

// "use strict";

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     // we want to create an new property which is an empty array but we dont want to pass it to the parameters so what we do is to:
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // Public Interface
//   deposit(val) {
//     this.movements.push(val);
//   }

//   withdrawal(val) {
//     this.deposit(-val);
//   }
//   // we also call these two functions here an API

//   approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const acc1 = new Account("Jonas", "EUR", 1111);
// console.log(acc1);

// acc1.deposit(250);
// acc1.withdrawal(140);
// acc1.requestLoan(1000);
// console.log(acc1); // now we can see that the arguments were added to the movements array
// console.log(acc1.pin);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Encapsulation _ Protected Properties and Methods >>

// // in thhis section we want to make our data more private which we cant get access to them outside the class

// 'use strict';

// class Account {
//   constructor(owner,currency,pin){
//     this.owner = owner;
//     this.currency = currency;
//     // Proteceted Property
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // Public Interface
//   getMovements(){
//        return this._movements;
//   }
//   deposit(val){
//     this._movements.push(val);
//   }
//   withdrawal(val){
//     this.deposit()
//   }
//   _approveLoan(val){
//     return true;
//   }
//   requestLoan(val){
//     if(this._approveLoan(val)){
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }
// // Encapsulation => to keep some properties and methods private inside the class so they are not accessible from outside of the class.

// // API => Public Interface

// const acc1 = new Account("Jonas","EUR",1111);
// acc1.deposit(450);
// acc1.withdrawal(140);
// acc1.requestLoan(1000);
// acc1._approveLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);
// console.log(acc1.pin);

// // we want to use a fake encapsulation using a convention
// // using the "_" before the variable or function that we want to make it private will prevent to access to it from outside the class and somehow make it more private but in ES6 we simply doesnt have a thing called private accessing to the data (or maybe we have but still jonas didnt talk about it).

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
