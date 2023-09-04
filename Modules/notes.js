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

// << Bundling with parcel and NPM Scripts >>

import cloneDeep from "lodash-es";
const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  User: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.User.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
if (module.hot) {
  module.hot.accept();
}
// this line of code is for when we change something in the vscode file the webPage wont get reloaded (whenever we testing out something)

