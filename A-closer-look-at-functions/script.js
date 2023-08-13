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
createBooking('LH123');
createBooking("Lh123",2,800);
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

