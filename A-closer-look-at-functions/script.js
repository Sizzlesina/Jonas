/** @format */

//       ----------------------------------------------------  A CLOSER LOOK AT FUNCTIONS ----------------------------------------------------

// // << Default Parameters >>

// 'use strict';
// // some function with default parameters
// const bookings = [];
// const createBooking = function(flightNum,numPassengers,price){
//   // the old way of setting default parameters:
//   // ES5
//   numPassengers = numPassengers || 1;
//   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }; // this will stored the values that we get to the function when calling it into parameters of the function
//   console.log(booking); // in here we log the values
//   bookings.push(booking); // in here we push the values into an empty array
// }
// createBooking('LH123');
// console.log(bookings);

// // now we want to write the new way of setting the default parameters:
// "use strict";
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   }; // this object is like an constructor
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH123");
// createBooking("Lh123", 2, 800);
// console.log(bookings);
// // now we set an default value for the parameters and then log it to the console

// // if we write the parameters like this its not correct:
// const createBookingWrong = function(flightNum, price = 199 * numPassengers , numPassengers){ // in here we set the default value for price but we need the numPassengers
//                                                                                              // value to set the default value of the price so this wont work cause the
//                                                                                              // numPassengers value will declare after the price
//   const booking = {
//     flightNum,
//     price,
//     numPassengers
//   };
//   console.log(booking);
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// // << How Passing Arguments Works_Value vs. Refrence >>

// 'use strict';
// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999"; // in here we set a default value for the first parameter that wont work
//   passenger.name = `Mr. ${passenger.name}`;

//   if (passenger.passport === 24739479284) alert("Check in");
//   else alert("Wrong Passport!");
// };
// checkIn(flight,jonas);
// console.log(flight);
// console.log(jonas);

// // is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// // Now we want to create a new function which will change the passport number of the passenger
// const newPassport = function (person){
//   person.passport = Math.trunc(Math.random() * 10000000000000)
// }
// newPassport(jonas);
// checkIn(flight,jonas);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// << First class and Higher order function >>

// this video was just some description's

/*
we have two type of functions in javascript : FIRST CLASS FUNCTIONS AND HIGHER ORDER FUNCTIONS

-------------------FIRST CLASS FUNCTIONS --------------------------------
👉Javascript treats function as first-class-citizens
👉This means that functions are SIMPLY VALUES
👉Functions are just another "type" of object
Store function in variable or properties:
const add = (a,b) => a + b;
const counter = {
  value : 25,
    inc: function(){this.value++;}
}

Pass function as argument to OTHER functions:
const greet = () => console.log("Hey jonas!")
btnClose.addEventListener("click",greet)

👉RETURN FUNCTION FROM DOM

Call methods of functions:
counter.inc.bind(someOtherObject);



---------------------------HIGHER ORDER-----------------------------------------

👉 A function that RECEIVES another function as an argument, that returns a new function, or both
👉 This is only possible because of first-class functions

1.FUNCTION THAT RECEIVES ANOTHE FUNCTION
const greet = () => console.log("Hey jonas!");
btnClose.addEventListener("click",greet);  => in here addEventListener is a HIGHTR_ORDER_FUNCTION and greet is a CALLBACK_FUNCTION

function count () {
  let counter = 0;
  return function(){
    counter++; 
  };
}
// in the last function count is a HIGHER_ORDER_FUNCTION and the function inside of this function is a RETURNED_FUNCTION
*/

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// // << Functions Accepting Callback Functions >>

// const oneWord = function (str) {
// return str.replace(/ /g,'').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // HIGHER_ORDER_FUNCTION
// const transforrmer = function(str,fn){
//   console.log(`Original string : ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// }
// transforrmer("Javascript is the best",upperFirstWord);

// transforrmer("Javascript is the best",oneWord);

// const high5 = function(){
//   console.log('✋');
// };
// document.body.addEventListener('click',high5);
// ['Jonas','Martha','Adam'].forEach(high5);

// // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// // << Functions Returning Functions >>

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // we can log this function to the console like this:
// const greeterHey = greet("Hey"); // this will store the value to the function inside the greet function
// greeterHey("Steven"); // this will store the value into the main funciton parameters
// greeterHey("Jonas");

// // another way of loggin this function to the console
// greet("Hello")("jonas"); // the first value is for the main function and the second one is for the function inside the main function

// // try to rewrite the greet function using the arrow function
// const greet1 = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greeterHello = greet1("Hello1");
// greeterHello("Sina");

// greet1("Hello1")("jonas");

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// // << The Call and Apply Methods >>

// // we're gonna go back to the this keyword and set the this keyword manualy

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Jonas Schmedtmann");
// lufthansa.book(635, "John Smith");
// console.log(lufthansa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// // this line of code will copy the information of the fucntion inside a variable and we wont be able to use the this keyword for it
// const book = lufthansa.book;
// // book(23, "Sarah Williams");

// // so here's the solution:
// // Call method
// // in the CALL METHOD we will tell to the variable that which function or object we gonna use and give it the values to use the this keyword in that function
// book.call(eurowings,23,"Sarah Williams");
// console.log(eurowings);
// // now in here we can use the this keyword for each of the objects

// book.call(lufthansa,239,"Mary Copper");
// console.log(lufthansa);

// const swiss = {
//   airline : "Swiss Air Lines",
//   iataCode : "LX",
//   bookings: [],
// }
// book.call(swiss,583,"Mary Cooper");
// console.log(swiss);

// // Apply method
// // in the apply method we will store the data into an variable then we pass the apply method two arguments
// // 1. the function or object that we're gonna use the this keyword in it
// // 2. the data that we gonna send to it
// const flightData = [583,"George Cooper"];
// book.apply(swiss,flightData); // this line is not used anymore
// console.log(swiss);

// book.call(swiss,...flightData); // this is the replaced way
// // the ...flightData to take the data out of flightData

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// // << The Bind Method >>

// "use strict";
// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };
// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };
// const book = lufthansa.book;
// // so in here we will just set the this keyword into an variable
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// // now in here using the this keyword of the variable we will be able to set a value for the function
// bookEW(23, "Steven Williams");

// // now we keep the "23" and reserve two 23 flight for diffrent passengers
// // in the bind method the argument will be set in stoned
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Jonas Schemedtmann");
// bookEW23("Martha Cooper");

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
// // now these line of codes will return a NaN and that's because the this keyword will point to the button
// // here's the solution:
// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// // Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.25); // now in this line of code we set the rate in stoned
// // addVAT = value => value + value * 0.25

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(100);
// console.log(23);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// // << A Test For Myself >>
// ("use strict");
// const lufthansa = {
//   airline : "Lufthansa",
//   iataCode : "LH",
//   bookings : [],
// }
// const euroWings = {
//   airline : "Eurowings",
//   iataCode : "EW",
//   bookings : [],
// }
// const swiss = {
//   ariline : "Swiss",
//   iataCode : "LX",
//   bookings : [],
// }
// const book = function (flightNum,name){
//   console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//   this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// }
// book.bind(lufthansa,23,'Sina');

// const person1 = {
//   fName: "",
//   lastName: "",
//   info: [],
// };

// const person2 = {
//   fName: "",
//   lastName: "",
//   info: [],
// };

// const completeInfo = function (firstName, lastName, obj) {
//   obj.fName = firstName;
//   obj.lastName = lastName;
//   obj.info.push({ information: `${obj.fName} ${obj.lastName}` });
//   console.log(
//     `First Name: ${obj.fName}, Last Name: ${obj.lastName}, Info: ${obj.info[0].information}`
//   );
// };

// const info1 = completeInfo.bind(null, "sina", "pooshideroo", person1);
// info1("sina", "pooshideroo");

// const person1 = {
//   fName: "",
//   lastName: "",
//   info: [],
// };

// const person2 = {
//   fName: "",
//   lastName: "",
//   info: [],
// };

// function completeInfo(firstName, lastName) {
//   this.fName = firstName;
//   this.lastName = lastName;
//   this.info.push({ information: `${this.fName} ${this.lastName}` });
//   console.log(
//     `First Name: ${this.fName}, Last Name: ${this.lastName}, Info: ${this.info[0].information}`
//   );
// }

// const info1 = completeInfo.bind(person1);
// info1('sina','pooshideroo');

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// "use strict";
// const person1 = {
//   name: "",
//   lName: "",
//   age: null,
// };
// const person2 = {
//   name: "",
//   lName: "",
//   age: null,
// };
// const editInfo = function (obj, ...values) {
//   const value = values.join(" ").split(" ");
//   const keys = Object.keys(obj);
//   for (let i = 0; i < keys.length; i++) {
//     obj[keys[i]] = value[i] || null;
//   }
// };
// editInfo(person1,"John","Smith",23)
// editInfo(person2,"Sina","Pooshideroo",20);
// console.log(person1);
// console.log(person2);
// // in this piece of code we have two objects with properties that have an empty value then we are passing the values of the object to it using an function and a for loop
// // this is just a reminder of what i taught previously

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// // << Coding Challenge #1 >>
// /*
// Lets build a simple poll app!

// A poll has a question, an array of options from which
// people can choose, and an array with the number of
// replies for each option. This data is stored in the
// starter object below.

// Here are your tasks:
// 1. Create a method called 'registerNewAnswer' on the
// 'poll' object. The method does 2 things:
// 1.1. Display a prompt window for the user to input
// the number of the selected option. The propmpt
// should look like this:
//   What is your favourite programming language?
//   0: JavaScript
//   1: Python
//   2: Rust
//   3: C++
//   (Write option number)

//   1.2. Based on the input number, update the answers
//   array, For example if the option is 3, Increase
//   the value AT POSITION 3 of the array by 1. Make
//   sure to check if the input is a number and if the
//   number makes sense (e.g answer 52 wouldn't make
//   sense right?)

// 2. Call this method whenever the user clicks the "Answer poll" button

// 3. Create a method 'displayResults' which displays
// the poll results. The method takes a string as an
// input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the
// results array as it is, using console.log(). This
// should be the default option. If type is 'string'
// display a string like 'Poll results are 13, 2, 4 ,1'.

// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this
// and the last lecture

// BONUS: Use the 'displayResults' method to display the
// 2 arrays in the test data. Use both the 'array' and
// the 'string' option. DO NOT put the arrays in the
// poll object! So what should the this keyword look like
// in this situation?

// GOOD LUCK😉
// */
// const pollButton = document.querySelector(".poll");
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       )
//     );
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//       this.displayResults();
//       this.displayResults('string');
//   },
//   displayResults(type = 'array'){
//     if(type === 'array')
//     console.log(this.answers);
//   else if(type === 'string'){
//     console.log(`Poll results are ${this.answers.join(', ')}`);
//   }
//   }
// };
// pollButton.addEventListener("click", poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({answers: [5,2,3]},'string');

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// // << Immediately Invoked Function Expressions (IIFE) >>
// const runOnce = function(){
//   console.log(`This will never run again!`);
// }
// runOnce();

// // Function form IIFE
// (function(){
//   console.log(`This will never run again!`);
//   // const isPrivate = 23;
// })();

// // console.log(isPrivate); // //  in the IIFE functions we can have access to the variables in global scope but the global scope can't use the variables inside the IIFE

// // Arrow form IIFE
// (() => console.log(`This will ALSO never run again!`))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46; // the var variables can be used outside the scope
// }
// // when we create an scope like this still inside the scope we can have access to the global but in global we can't have access to inside the scope

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// // << Closures pt 1 >>

// const number = function(){
//   let number = 0;
//   return function (){
//     console.log(`${++number} Number`);
//   }
// }
// const counter = number();
// counter();
// counter();
// counter();

// console.dir(counter); // this line of code is simmilar to console.log

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// // << Closures pt 2 >>

// // we want to have two more examples of the closures

// "use strict";

// // EXAMPLE 1
// let closure;

// const fun = function () {
//   const num = 23;
//   closure = function () {
//     console.log(num * 2);
//   };
// };

// fun(); // this function will keep the variable declations inside of itself
// closure(); // and this function will do the process
// console.dir(closure); // we can see the directory of the closure like this

// // now we want to assign another function and see if the closure works
// // Re-assgning closure function
// const anotherFun = function (){
//   const num1 = 777;
//   closure = function () {
//     console.log(num1 * 2);
//   };
// }

// anotherFun();
// closure(); // as we can see it works
// console.dir(closure);

// // EXAMPLE 2

// const boardPassengers = function(n,wait){
//   const perGroup = n / 3;

//   setTimeout(function(){
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// }

// boardPassengers(180,3);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

// // << Coding Challenge #2 >>

// /* 
// this is more of a thinking challenge than a coding 
// challenge 🥸

// Take the IIFE below and at the end of the function,
// attach an event listener that changes the color of
// the selected h1 element ('header') to blue, each time
// the BODY element is clicked, DO NOT select the h1
// element again!

// And now explain to YOURSELF (or someone around you)
// WHY this worked! Take all the time you need, Think
// about WHEN exactly the callback function is executed,
// and what that means for the variables involved in
// this example.

// GOOD LUCK 😉
// */
// (function(){
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click',function(){
//     header.style.color = 'blue';
//   })
// })();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]
