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

// now we want to write the new way of setting the default parameters:
"use strict";
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  }; // this object is like an constructor
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("Lh123", 2, 800);
console.log(bookings);
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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------]
