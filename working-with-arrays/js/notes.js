/** @format */

// // << working with arrays >>
// const current = new Map([
//   ['USD','United States dollar'],
//   ['EUR',"Euro"],
//   ['GBP','Pound sterling'],
// ]);

// const movements = [250,450,-400,3000,-650,-130,70,1300];

// let arr = ['a','b','c','d','e'];

// // slice method
// // the slice method will return a new array
// console.log(arr.slice(2));

// // first parameter is for the start index and the second one is for the end index
// console.log(arr.slice(2,4));

// // the negative parameter will execute the array from the end of it
// console.log(arr.slice(-2));
// console.log(arr.slice(1,-1));

// // when we use positive parametes the index's of the array will start from 0 but when we using the negative parameter it will start from -1
// console.log(arr.slice(0));
// console.log(arr.slice(-1));

// // this line of code will copy the whole array
// console.log(arr.slice([...arr]));

// // splice method
// // it actully changes the original array
// // console.log(arr.splice(2));  // the output is as same as the slice method but the original array will affect
// // console.log(arr);  // as you can see...

// arr.splice(-1); // remove the first  element from the end of array
// arr.slice(1,2); // remove the second element
// console.log(arr);

// // reverse method
// // this method will reverse the array and will affect on the original array
// arr = ['a','b','c','d','e'];
// const arr2 = ['j','i','h','g','f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // concat method
// // this method is for connecting two arrays together
// // this method wont affect the original array
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(arr,arr2);
// console.log([...arr,...arr2]); // this will have the same result as the previous code

// // join method
// // The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array,
// // separated by commas or a specified separator string.
// // If the array has only one item, then that item will be returned without using the separator.
// // this array wont affect the original array
// console.log(letters.join('-'));
// console.log(letters);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << The new at Method >>
// 'use strict';

// const arr = [23,11,64];
// console.log(arr[0]); // if we want to take the first element of the array we do this
// console.log(arr.at(0)); // or we can do this
// // the output's are exact the same

// // getting last array element
// console.log(arr[arr.length - 1]); // in this way we get the last element of the array
// console.log(arr.slice(-1)[0]); // or we can do this
// console.log(arr.at(-1)); // this is the easiest way of writing this piece of code

// // writing the short hand model of the array
// console.log('Jonas'.at(0));
// console.log("Jonas".at(-1));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Looping Arrays forEach >>



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// }
// console.log('------ FOR EACH ------');
// movements.forEach(function (movement) {
//   if (movement > 0) console.log(`You deposited ${movement}`);
//   else console.log(`You withdraw ${Math.abs(movement)}`);
// });

// // these two loops are exactly works the same

// console.log('---- FOR OF ENTRIES ----');
// /* this loop at the first place will return the index and the value of it*/ 
// for(const [i,movement] of movements.entries()){
//   if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   else console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
// }
// // al we need to know about the for of entries loop:
// // if we have an array and we use the for of entries loop on it we will get the index and the value of the index
// // if we have an object with some properties we will get the key and the value of it

// console.log('---- FOREACH FORM OF FOR OF ENTRIES ----');
// // now we can use the for of entries in a forEach form like this:
// movements.forEach(function(movement,index){
//   if(movement > 0) console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   else console.log(`Movement ${index + 1}: You withdraw ${Math.abs(movement)}`);
// })
// // continue and break wont work in a forEach loop

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << forEach with Maps and Sets >>

// // Map
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function(value,key,map){
//   console.log(`${key}: ${value}`);
// })

// // Set
// const currenciesUnique = new Set(["USD","GBP","USD","EUR","EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value,_,map){
//   console.log(`${key}: ${value}`);
// }) // the key and value in the set forEach is the same becasue the value is as same as the key
// // if we use '_' in the parameters of a function it will mean that this is a throwaway

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << PROJECT _Bankist_App
 
// Account Declarations
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const accounts = [account1, account2, account3, account4];
// Element Declarations

// Label Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

// Container Elements
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

// Btn Elements
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

// Input Elements
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movement){
  movements.forEach(functionI(mov,i){
    
  })
}
displayMovements.apply(account1.movements)