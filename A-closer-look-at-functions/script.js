/** @format */

//       ----------------------------------------------------  A CLOSER LOOK AT FUNCTIONS ----------------------------------------------------

// // << Default Parameters >>

// 'use strict';
// // some function without the default parameters
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
// now we set an default value for the parameters and then log it to the console

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

// ("use strict");
// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = `Mr. ${passenger.name}`;

//   if (passenger.passport === 24739479284) alert("Check in");
//   else alert("Wrong Passport!");
// };
// checkIn(flight,jonas);
// console.log(flight);
// console.log(jonas);

// // is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// // Now we want to create a new function which will change the passport number of the passenger
// const newPassport = function (person){
//   person.passport = Math.trunc(Math.random() * 10000000000000)
// }
// newPassport(jonas);
// checkIn(flight,jonas);

// ------------`----------------------------------------------------------------------------------------------------------------------------------------------------------------------]

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

RETURN FUNCTION FROM DOM

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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]

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
// greet("Hello")("jonas"); // the first value is for the main function adn the second one is for the function inside the main function

// try to rewrite the greet function using the arrow function
// const greet = (greeting) => (name) =>
//   console.log(`${greeting} ${name}`);
// ;
// greet("Hello")("jonas");

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

