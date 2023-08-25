/** @format */

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ""; // remove the last movements and replace the new ones
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Part 4 >>
// << Adding a calcDisplaySummary function with chaining methods >>

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Part 5
// << Implementing Login >>

// Event handler
let currentAccount;
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};
btnLogin.addEventListener("click", function (e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  ); // question : where is the userName in the object? well we created a funciton that creates a userName earlier and then add it to the object
  console.log(currentAccount);
  if (currentAccount.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }.`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    // update UI
    updateUI(currentAccount);
  } else alert("Wrong Password!");
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Part 6>>
// Impelementing Transfer >>
const clearInput = function (input1, input2) {
  input1.value = input2.value = "";
};
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    const question = prompt(
      `Are you sure that you want to transfer ${amount}€ to ${receiverAcc.owner} Y/N`
    );
    if (question === "Y" || question === "y") {
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      // update UI
      updateUI(currentAccount);
      alert("Transfer completed!");
      clearInput(inputTransferAmount, inputTransferTo);
    } else if (question === "N" || question === "n") {
      alert("Transfer cancelled!");
      clearInput(inputTransferAmount, inputTransferTo);
    } else {
      alert("Wrong answer!");
      clearInput(inputTransferAmount, inputTransferTo);
    }
  }
});
// changed the piece of codes by my own so i think the application will work better

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Part 7
// The findIndex Method >>

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // Delete Account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  clearInput(inputCloseUsername, inputClosePin);
  labelWelcome.textContent = "Login to get started";
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Part 8
// Create Loan part of our app

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  } else alert("The loan amount is not allowed!");
  inputLoanAmount.value = "";
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Part 9
// Using the flat method and completing the bank account app more
// we want to take out all the movements and put them in one array

const overalBalance = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov);
console.log(overalBalance);
// the flatMap method will goes one level deep and it will flat the main array and to the map method work on it (make an new array from it).
// i dont know why this important in our application but whatever...

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Part 10
// Sorting arrays

// first we will add a parameter to the displayMovements function named sort
// then we write some piece of codes in the function and then we add the event for the sort button
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Part 11
// We want to get the value of the movements then do a calculation and return the sum of them

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );
  console.log(movementsUI);

  // const movementsUI2 = [...document.querySelectorAll(".movements__value")]; // this piece of code will make an array like the code above but then we must use the mapping separately
});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// // << The Find Method >>

// // FIND => will accept callback function and condition

// // this method will not return a new array but it will only returns the first element in the array that satisfies the condition

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === "Jessica Davis") console.log(acc);
// }

// // some diffrences between filter and find =>
// // 1. FIND method will return an element but the FILTER method will return a new array

// // 2. FIND method will only returns the first element that match the condition but the FILTER method will return all the elements which math the condtion

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Some and Every >>

// const movements = [250,450,-400,3000,-650,-130,70,1300];
// console.log(movements)

// // INCLUDES => Equality => the INCLUDES method is checking for equality
// console.log(movements.includes(-130));

// // SOME => Condition => the SOME method is checking for condition
// // this method says some movements are bigger than zero
// console.log(movements.some(mov => mov === -130));
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// // EVERY => it says all of the movements are bigger than zero
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Seperate callback
// const deposits = mov => mov > 0;
// console.log(movemets.some(deposits));
// console.log(movements.every(deposits));
// console.log(movements.filter(deposits));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << flat and flatMap methods for arrays >>
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8],
// ];
// console.log(arr.flat()); // this method will concat the array values together and it wont accepts a callback function as argument
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(1)); // this is the default model of the flat method and it will work with one level of nesting (the number inside the method shows the level of deep nesting).
// console.log(arrDeep.flat(2)); // now we get the same result as the previous array code above because we say that we need two level of deep nesting level

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //<< Sorting arrays >>
// const movements = [250, 450, -400, 3000, -650, -130, 70, 1300];
// // String
// const owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners.sort()); // this method will sort the array from A to Z
// console.log(owners);

// // Numbers
// console.log(movements);
// console.log(movements.sort());
// // the numbers wont get sorted because the sort method works for strings by default
// // it realised that if the number was a string how would be the sort of it so: it only looks at the first number a number for example:
// // -1 0 1 2 3 4 5 6 7 8 9
// // and it goes by this order
// // now how can we fix this problem?

// // Acscending
// movements.sort((a, b) => {
//   // return < 0 , A , B (keep order)
//   // return > 0 , B , A (switch order)
//   if (a > b) return 1;
//   else return -1;
// }); // a is the current value and b is the next value
// console.log(movements);

// // Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   else return 1;
// });
// console.log(movements);

// // simpled Acscending
// movements.sort((a, b) => a - b);
// console.log(movements);

// // simpled Descending
// movements.sort((a, b) => b - a);
// console.log(movements);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << More ways of creating and filling arrays >>

// console.log([1,2,3,4,5,6,7]);
// console.log(new Array(1,2,3,4,5,6,7));

// const x = new Array(7); // in this line of code we expect the output to be a new array with only one value but the output will be a new array with 7 empty values it uses the previous array length
// console.log(x);
// console.log(x.map(() => 5)); // can we fix it using the map method? NO
// // so whats the solution?
// // USING THE FILL METHOD
// x.fill(1) ;
// console.log(x); // this method will create a new array but with the previous length it will fill the new array with the value that we send to it for example in here the output will be : [7,7,7,7,7,7,7]

// // this method is work simillar to the slice method => the second argument of the method will set the start index of the new array

// // x.fill(1,3);
// // console.log(x); // the result will be starting from the index 3 setting the 1 value for the array like this : [7,7,7,1,1,1,1]

// // // we can also use the final index like this :
// // x.fill(5,5,7);
// // console.log(x);

// // Array.from
// const y = Array.from({length: 7},() => 1);
// console.log(y); // we have a exact same result as using the fill method

// const z = Array.from({length: 7},(cur,i) => i + 1);
// console.log(z);

// const zWithoutParameter = Array.from({length: 7},(_,i) => i + 1);
// console.log(zWithoutParameter); // we can skip a parameter if we dont want it like this

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Summary Which Array Method to Use >>

//  // we learned 27 array methods

// // 1.
// let array =  [1,2,3];
// console.log(array.length);
// // 2.
// array =  [1,2,3];
// console.log(array.push(4));
// // 3.
// array =  [1,2,3];
// console.log(array.unshift(0));
// // 4.
// array =  [1,2,3];
// console.log(array.shift());
// // 5.
// array =  [1,2,3];
// console.log(array.pop());
// // 6.
// array =  [1,2,3];
// console.log(array.at(3));
// // 7.
// array =  [1,2,3];
// console.log(array.indexOf(1));
// // 8.
// array =  [1,2,3];
// console.log(array.includes(3));
// // 9.
// array =  [1,2,3];
// console.log(array.map(num => Math.pow(num,2)));
// // 10.
// array =  [1,2,3];
// console.log(array.filter(num => num % 2));
// // 11.
// array =  [1,2,3];
// console.log(array.every(num => num > 1));
// // 12.
// array =  [1,2,3];
// console.log(array.some(num => num > 1));
// // 13.
// array =  [1,2,3];
// console.log(array.fill(10));
// // 14.
// array =  [1,2,3];
// console.log(array.reduce((acc,cur,index,arr) => acc + cur));
// // 15.
// array =  [1,2,3];
// console.log(array.concat([4,5]));
// // 16.
// array =  [1,2,3];
// console.log(array.reverse());
// // 17.
// array =  [1,2,3];
// console.log(array.sort((num1, num2) => num1 - num2));
// // 18.
// array =  [1,2,3];
// console.log(array.join('-'));
// // 19.
// array =  [1,2,3];
// console.log(array.flat());
// // 20.
// array =  [1,2,3];
// console.log(array.flatMap(num => num > 2));
// // 21.
// array =  [1,2,3];
// console.log(array.find(num => num > 1));
// // 22.
// array =  [1,2,3];
// console.log(array.findIndex(num => num === 2));
// // 23.
// array =  [1,2,3];
// console.log(array.toString());
// // 24.
// array =  [1,2,3];
// console.log(array.slice(1,3));
// // 25.
// array =  [1,2,3];
// console.log(array.splice(1,0,2,3));
// // 26.
// array =  [1,2,3];
// console.log(Array.isArray(array));
// // 27.
// array =  [1,2,3];
// console.log(Array.from({length: 7}, num => 8));

// // added a pdf file into the "box-file" folder

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Array method practice >>

// // 1.
// const bankDepositSum = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// // 2.
// // const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length; // this line of code is not wrong but better to be written this way:
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log("Deposits over 1000:", numDeposits1000);

// // Prefixed ++ operator
// let a = 10;
// console.log(++a);
// console.log(a);

// // 3.
// const { deposits, withdrawals } = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// // 4. Challenge you to rewrite the previouse examples using only reduce method
// console.log(accounts);

// // 1.
// const reduceBankDepositSum = accounts.reduce((sum, acc) => {
//   acc.movements
//     .filter((mov) => mov > 0)
//     .forEach((mov) => {
//       sum += mov;
//     });
//   return sum;
// }, 0);
// console.log(bankDepositSum);
// // 2.
// const reduceNumDeposits = accounts.reduce((sum, cur) => {
//   cur.movements.filter((mov) => (mov >= 1000 ? ++sum : sum));
//   return sum;
// }, 0);
// console.log("Deposits over 1000:", reduceNumDeposits);

// // 3.
// const { reduceDeposits, reduceWithdrawals } = accounts.reduce(
//   (sums, cur) => {
//     cur.movements.forEach((el) => {
//       sums[el > 0 ? "reduceDeposits" : "reduceWithdrawals"] += el;
//     });
//     return sums;
//   },
//   { reduceDeposits: 0, reduceWithdrawals: 0 }
// );

// console.log(reduceDeposits, reduceWithdrawals);

// // 5.
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str
//   const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
  
//   const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1) ).join(' ');
//   return titleCase;
// };
// console.log(convertTitleCase("this is a nice title"));
// console.log(convertTitleCase("this is a LONG title but not too long"));
// console.log(convertTitleCase("and here is another title with an EXAMPLE"));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Coding Challenge #4 >>

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael']}
];

// 1.
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28))


// 2.
const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recfood ? "much" : "little"}`);

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7.
const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log(dogsEatingOkay);

// 8.
const dogsSorted = dogs.slice().sort((a,b) => a.recFood - b.recFood);
console.log(dogsSorted);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// END OF THE ARRAY METHODS SECTION
// added to github
