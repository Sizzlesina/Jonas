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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << PROJECT _Bankist_App >>
// Part 1

// Account Declarations
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// Element Declarations

// Label Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

// Container Elements
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

// Btn Elements
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

// Input Elements
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = ""; // remove the last movements and replace the new ones

  movements.forEach(function (mov, i) {
    // in the function inside the forEach loop the two parameters are return the value of the array and the index of it
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
    // the insertAdJacentHTML can return two values as "afterbegin" and "beforeend" and in here we use the first one because if we were use the second one it will return
    // the value of the array from end to first
  });
};

displayMovements(account1.movements);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// part 2

// Computing Usernames >>

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
console.log(accounts);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Part 3 >>
// << Adding a calcPrint function using reduce method >>

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Part 4 >>

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Coding Challenge #1 >>

// /*
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array
//  (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least
//  3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array,
//  and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

// 2. Create an array with both Julia's (corrected) and Kate's data

// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy
// ("Dog number 2 is still a puppy 🐶")

// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const checkDogs = function(dogsJulia,dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0,1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs =  dogsJuliaCorrected.concat(dogsKate);
//   dogs.forEach(function(dog,i){
//     if(dog >= 3) {console.log(`Dog number ${i + 1} is an adult, and
//     its ${dog} years old`);}
//     else{
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   })

//   console.log(dogsJuliaCorrected);
// }
// checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Data Transformations With MAP, FILTER and REDUCE >>

// MAP => Map returns a NEW ARRAY containing the results of applying an operation on all original array elements
// FILTER => Filter returns a NEW ARRAY containing the array elements that passed a specified TEST CONDITION
// REDUCE => Reduce boils ("reduses") all array elements down to one single value (e.g adding all elements together)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << The map method >>

// const euroToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementsUsd = movements.map(function (mov) {
//   return Math.trunc(mov * euroToUsd);
// });
// console.log(movements);
// console.log("----FIRST OUTPUT----"); // in this way we create a new array using map method
// console.log(movementsUsd);
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(Math.trunc(mov * euroToUsd));
// console.log("----SECOND OUTPUT----"); // in this way we will create a whole new array but manually
// console.log(movementsUSDfor);

// // we can simplify our callback function using arrow function

// const arrowCallback = movements.map((mov) => Math.trunc(mov * euroToUsd));
// console.log("----THIRD OUTPUT----");
// console.log(arrowCallback);

// console.log("----FOURTH OUTPUT----");
// console.log(
//   "We can have access to the value ,index and the whole array using map method"
// );

// const movementsDescription = movements.map((mov,i,arr) =>`Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`); // in this piece of code the value of the array is "mov" and the index of it is "i" and the whole array is "arr"
// const movementsNote = movements.map((value,index,array) => `Value : ${value}, Index : ${index}, The whole array : ${array}`); // just to note
// console.log(movementsDescription);
// console.log(movements);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Filter Method >>

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log("---- FIRST OUTPUT ----");
// console.log(movements);
// console.log(deposits);

// console.log("---- SECOND OUTPUT ----");
// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) depositsFor.push(mov);
// }
// console.log(depositsFor);

// const withdrawals = movements.filter( mov => mov < 0);
// console.log("A FUNCTION FOR WITHDRAWAL");
// console.log(withdrawals);

// // an explanation for filter method parameters :
// console.log("----FIFTHE OUTPUT----");
// const parametersFilter = movements.filter((value,index,array) => console.log(`value: ${value}, index: ${index}, array: ${array}`))

// // FILTER => Filter will show the elements of the array that passed the condition

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << The Reduce Method >>

// // REDUCE => Reduce has two parameters first one is a callback function and the second one is from where to start counting

// const movements = [200, 450, -400, 3000 , -650, -130, 70, 1300 ];
// console.log("THE MAIN ARRAY");
// console.log(movements);

// // ACCUMULATOR => SNOWBALL
// console.log("____ FIRST OUTPUT ____");
// const parametersReduce = movements.reduce(function (acc, cur, i, arr) {
//   acc = acc + cur;
//   console.log(
//     `Accumulator: ${acc}, Current element: ${cur}, Index: ${i}, Array: ${arr}`
//   );
//   return acc;
// });
// // ACCUMULATOR is like a container which will keep the value inside of itself
// console.log("____ SECOND OUTPUT ____");
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// console.log("____ THIRD OUTPUT ____");
// let sum = 0;
// for (const [i, mov] of movements.entries()) {
//   console.log(`Iteration ${i}: ${sum}`);
//   sum += mov;
// }
// console.log(sum);
// // this FOR_OF loop hava the same result as the reduce method above

// const arrowReduce = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
// console.log("____ FOURTH OUTPUT _____");
// console.log(arrowReduce);

// // Maximum value
// const max = movements.reduce(function(acc,mov){
//   if(acc > mov)
//   return acc;
// else
//   return mov;
// },movements[0])
// console.log(max);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Coding Challenge #2

// /*
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const calcAverageHumanAge = (ages) => {
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const adults = humanAges.filter((age) => age <= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   return average;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << The Magic of Chaining Methods >>

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;
// // PIPELINE
// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => Math.trunc(mov * euroToUsd))
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Coding Challenge #3

// /* 
// Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const calcAverageHumanAge = (ages) => {
//   const humans = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age <= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//     return humans;
//   };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1,avg2);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
