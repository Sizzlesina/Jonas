/** @format */

//      ______________________________________________  Modern JavaScript Development_ Modules, Tooling, and Functional ______________________________________________

// << An overview of modern javascript development >>

// some descriptions: in the javascript language we use packages and some bundle to make the json format of the packages to the javascript language that we can name "parcel" and "webpack" that as what jonas said the parcel package is so better than the webpack (we use these packages in the build process) and for transpiling and polyfilling we use Babel

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << An overview of modules in javascript >>

// some descriptions:
// Module => 👉 Reusable piece of code that encapsulates implementations details.
//👉 Usually a STANDALONE FILE but it doesnt have to be.

//---------------------------------------------------------------------------------------------------------------------------
// Why modules?
// 1. 👉 Compose software => modules are small building blocks that we put together to build complex applications;

// 2. 👉 Isolate components => modules can be developed in isolation without thinking abstractions into other modules.

// 3. 👉 Abstract code => implement low-level code in modules and import these abstractions into other modules.

// 4. 👉 Organized code => modules lead to a more organized codebase.

// 5. 👉 Reuse code => modules allow us to easily reuse the same code,even across multiple project.

//---------------------------------------------------------------------------------------------------------------------------

// ES6 Modules => modules stored in files exactly one module per file.

// Some diffrences between moduls and script:

// Top-level variables => ES6 Modules: scopeed to module , Script: Global
// Default mode => ES6 Modules: Strict mode , Script: "Sloppy" mode
// Top-level this ES6 Modules: undefined , Script: window
// Imports and exports => ES6 Modules: YES✅ , Script: NO⛔
// File downloading ES6 Modules: Asynchronous , Script: Synchronous

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Exporting and importing in ES6 Modules >>

// // // Importing module
// // // we can import the thing that we want from the module in our file but we the name that we want (we can change the name)
// // import { addToCart,totalPrice as price,tq} from "./shoppingCart.js";

// // addToCart("Bread",5);
// // console.log(price,tq);

// // // with this line of code we just simply import everything
// // import * as shoppingCart from "./shoppingCart.js"
// // console.log("Importing module");
// // shoppingCart.addToCart("Bread",5);
// // console.log(shoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq,cart } from "./shoppingCart.js"; // this will import the default export no matter what it called
// add("Pizza", 5);
// add("Bread",2);
// add("Apples",4);
// console.log(cart);
// // this line of code is for showing that we export a empty array but when we push a value in it the array is no more empty even in the imported file so we can figure out that the import and exports are life connections

// console.log(price);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << introduction to NPM >>

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

// const state ={
//   cart: [
//     {product : "bread", quantity : 5},
//     {product : "pizza",quantity : 5},
//   ],
//   User : {loggedIn : true},
// };

// const stateClone = Object.assign({},state);
// const stateDeepClone = cloneDeep(state);
// state.User.loggedIn = false;
// console.log(stateClone);

// console.log(stateDeepClone);

// // in the next video we will use the parcel

// // when we have too many dependencies we dont want to save them in our directory so we can just simply delete them and anytime we wanted to use them just use the "npm i " command in the terminal so the npm will install all the dependencies that are written in the package.json file

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Bundling with parcel and NPM Scripts >>

// import cloneDeep from "lodash-es";
// const state = {
//   cart: [
//     { product: "bread", quantity: 5 },
//     { product: "pizza", quantity: 5 },
//   ],
//   User: { loggedIn: true },
// };
// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);
// state.User.loggedIn = false;
// console.log(stateClone);

// console.log(stateDeepClone);
// if (module.hot) {
//   module.hot.accept();
// }
// // this line of code is for when we change something in the vscode file the webPage wont get reloaded (whenever we testing out something)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Review writing clean and modern javascript >>

// we dont need to use the "use strict" syntax because with using packages it will use the strict mode by default

// some description on how to write a clean code (i can check the javascript documentation later if i forgot)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Let's fix some bad code >>

// // get the unfixed codes from the jonas starter file in the github repository

// const budget = [
//   { value: 250, description: "Sold old TV 📺", user: "jonas" },
//   { value: -45, description: "Groceries 🥑", user: "jonas" },
//   { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
//   { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
//   { value: -1100, description: "New iPhone 📱", user: "jonas" },
//   { value: -20, description: "Candy 🍭", user: "matilda" },
//   { value: -125, description: "Toys 🚂", user: "matilda" },
//   { value: -1800, description: "New Laptop 💻", user: "jonas" },
// ];

// const spendingLimits = {
//   jonas: 1500,
//   matilda: 100,
// };
// const getLimit = (user) => spendingLimits?.[user] ?? 0;

// const addExpense = function (value, description, user = "jonas") {
//   user = user.toLowerCase();

//   const limit = getLimit(user);
//   if (value <= getLimit(user)) {
//     budget.push({ value: -value, description, user });
//   }
// };
// addExpense(10, "Pizza 🍕");
// addExpense(100, "Going to movies 🍿", "Matilda");
// addExpense(200, "Stuff", "Jay");

// const checkExpenses = function () {
//   for (const entry of budget) {
//     if (entry.value < -getLimit(entry.user)) entry.flag = "limit";
//   }
// };
// checkExpenses();

// const logBigExpenses = function (bigLimit) {
//   let output = "";
//   for (const entry of budget)
//     output += entry.value <= bigLimit ? `${entry.description.slice(-2)} /` : "";

//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(budget);
// };

// console.log(budget);
// logBigExpenses(500);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Declative and functional javascript principles >>

// some descriptions are said just listen then later check the javascript documentation

// Functional programming technique:
// 👉 Use buit-in methods that dont produce side effects
// 👉 Do data transformations with methods such as .map() .filter() and .reduce()
// 👉  Try to avoid data mutations
// 👉 Try to avoid side effects in functions this is of course not always possible!

// Declarative syntax:
// 👉 Use array and object destructing]
// 👉 Use the spread operator (...)
// 👉 Use the ternary (conditional) operator
// 👉 Use template literals

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Let's fix some bad code pt2 >>

// "strict mode";


// const budget = Object.freeze([
//   { value: 250, description: "Sold old TV 📺", user: "jonas" },
//   { value: -45, description: "Groceries 🥑", user: "jonas" },
//   { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
//   { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
//   { value: -1100, description: "New iPhone 📱", user: "jonas" },
//   { value: -20, description: "Candy 🍭", user: "matilda" },
//   { value: -125, description: "Toys 🚂", user: "matilda" },
//   { value: -1800, description: "New Laptop 💻", user: "jonas" },
// ]);

// const spendingLimits = Object.freeze({
//   jonas : 1500,
//   matilda : 100,
// });

// const getLimit =  (limits, user) => limits?.[user] ?? 0;

// const addExpense = function(state,limits,value,description,user = "jonas"){
//   const cleanUser = user.toLowerCase();

//   return value <= getLimit(limits,cleanUser) ? [...state,{value : -value,description,user : cleanUser}] : state;
// }

// const newBudget1 = addExpense(budget,spendingLimits,10,"Pizza 🍕") 
// const newBudget2 = addExpense(
//   newBudget1,
//   spendingLimits,
//   100,
//   'Going to movies 🍿',
//   'Matilda'
// );
// const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses = (state, limits) =>
//   state.map(entry =>
//     entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry
//   );
//   const finalBudget = checkExpenses(newBudget3, spendingLimits);
// console.log(finalBudget);
// // Impure 
// const logBigExpenses = function (state, bigLimit) {
//   const bigExpenses = state
//     .filter(entry => entry.value <= -bigLimit)
//     .map(entry => entry.description.slice(-2))
//     .join(' / ');
//   // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

//   console.log(bigExpenses);

//   // let output = '';
//   // for (const entry of budget)
//   //   output +=
//   //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
//   // output = output.slice(0, -2); // Remove last '/ '
//   // console.log(output);
// };

// logBigExpenses(finalBudget,500); 



// the javascript course finally has come to end 

