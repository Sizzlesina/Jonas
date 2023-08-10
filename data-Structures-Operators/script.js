// // <<Array destructoring>>
// 'use strict';
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze,Italy',
//   categories: ['Italian', 'pizzeria', 'Vegeterian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// //  we can destruct this array in an old way:
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);
// // this is the old way of unpacking(destructing) an array
// // New way:
// const [x, y, z] = arr; // dont forgot this is not an array this just an way to destruct an array
// console.log(x, y, z);
// // now we unpack the array values in a variable

// const [first, second] = restaurant.categories;
// console.log(first, second);
// // in this way we get the first two elements of the cetegories and store it in an variable

// const [First, , Second] = restaurant.categories;
// console.log(First, Second);
// // now in this way we store the first and the third elements of the object in an variable

// let [main, , secondary] = restaurant.categories;
// // now we store the "Italian" string in the main variable and the "Vegetarian" string in the secondary variable
// console.log(main, secondary);

// // now we want to swap the values of main and secondary
// // in the old way we do this:

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// // but in the new way we do this:

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // this is called Switching variables☝️

// // Receive 2 return values from a function
// console.log(restaurant.order(2,0)); // we get these two results then we destruct it:
// const [starter,mainCourse] = restaurant.order(2,0);
// console.log(starter,mainCourse);

// // what will happen if we have a nested array?
// const nested = [2,4,[5,6]];
// const [i, ,j] = nested; // now we store the first and third index values of the nested array in an variable
// console.log(i,j);
// const [l, ,[r,k]] = nested; // now we store the first index value of the array and first and seconda index values of the third index value of the main array
// console.log(l,r,k);

// // Default values
// const [p,q,y] = [8,9];
// console.log(p,q,y); // we will get an error because the third variable is undefined
// const [p =1,q = 1 ,y = 1] = [8,9] // now the problem fixed cause we set an default value for the variables

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // <<Destructing objects>>
// 'use strict';
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanati 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Frocaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thru: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24, // Open 24 hours
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
//     console.log(
//       `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole 21',
//   mainIndex: 2,
//   starterIndex: 2,
// }); // we can give the parameter values to the orderDelivery function like this and in this way we can set an default value for the parameters

// const {name,openingHours,categories} = restaurant;
// console.log(name,openingHours,categories);
// const {name : restaurantName , openingHours: hours,categories: tags} = restaurant; // we are able to change the variable names like this
// console.log(restaurantName,hours,tags);

// // Default values
// const {menu = [],starterMenu : starters = []} = restaurant; // we will give an default value for each variable that we change the name of it
// // Tip: because there is no menu in our object so we set the empty array value for it then we log it to the console
// console.log(menu,starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23,b: 7,c: 14};
// // we wawnt to  change the value of the a and b variables to the 23 and 7 so here is what we do:
// ({a,b} = obj); // in here if we dont use "()" the javascript will analize that as a code block and the code wont work
// console.log(a,b);

// // Nested objects:
// const {fri: {open : o,close : c}} = openingHours;
// console.log(o,c);
// // in this block of code we wil get the two values inside of the fri and then change the name of it to a new variable
// // Tip: we must use the same name of the variable inside of the fri and it works the same for nested objects

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // <<The spread operators>>
// 'use strict';
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanati 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Frocaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thru: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24, // Open 24 hours
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//     );
//   },
// };

// const arr = [7, 8, 9];
// // an old way to create an new array but with some new values in the first of it
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr); // this will log the individual elements of the array
// console.log(1, 2, 7, 8, 9);
// // the result's are the same but the method is diffrent
// // this way IS NOT CORRECT!:
// const newarr = [1, 2, arr];
// console.log(newarr);

// // another example:
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); // in this wa we will add the "Gnocci" to the array in the restaurant object

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join two array or more together
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables : arrays,strings,maps,sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.']; // we will slice the letters of "Jonas" in this way
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`); // this wont work

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);
// // these two console log are have the exact same result

// // Objects
// // want to create a new restaurant object which includes the last object properties and have a new property
// const newRestaurant = {foundedIn: 1998,...restaurant,founder:"Guiseppe"}
// console.log(newRestaurant);
// // now we have a new object plus founder plus founded in

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Rest pattern and Rest parameters>>

// 'use strict';
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanati 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Frocaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thru: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24, // Open 24 hours
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };

// // 1.Destructoring

// // SPREAD, because on RIGHT side of =
// // this will print the "3,4" inside of the third index value of the array into an new array
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // REST,because on LEFT side of =
// // it will store the "3,4,5" in the "others" variables
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// // in this way we store the pizza and risotto in a variable and destruct it then we skip one value then store the rest of the values inside of the otherFood variable
// // Tip: rest element must be the last element

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// // now in here we are store the sat in a different variable and store the other values into an "weekdays" variable then we log it to the console

// // 2.Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(2, 3, 4, 5, 6, 7, 2, 32);
// // now we can show as many numbers as we want

// const x = [23, 5, 7];
// add(...x); // now we get all the numbers from the array then log it to the console

// restaurant.orderPizza('Mashrooms', 'Onion', 'Olives', 'Spinach'); // the first argument will be stored in the first parameter syntax of the function and the rest will be stored in the second one
// // if we dont get the second argument to the function it will return an empty array for us

// // The Spread and The Rest operators look exactly the same but they work in opposite ways depending on where they get used
// // variable = [...something] => SPREAd
// // [...something] = value => REST

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Short circuiting(&& and ||)
// 'use strict';
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanati 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Frocaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thru: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24, // Open 24 hours
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };
// console.log('---OR---');
// // use any data type , return any data type,short-circuiting
// console.log(3 || 'jonas');

// // short-circuiting: if the first value is a truthy value it will immediately return the first value

// console.log('' || 'jonas'); // result => jonas
// console.log(true || 0); // result => true
// console.log(undefined || null); // result => null

// console.log(undefined || 0 || '' || 'hello' || 23 || null); // result => hello => because hello is the first truthy value out of these values

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // this line will check that if the "restaurant.numGuests" is exist if the answer is yes it will store the values of that insid of a variable and if not it will set an default value for it
// console.log(guests1); // now the restaurant.numGuest is not exist so the "10" value will be stored in the "guests1";

// // now we want to use short-circuiting:
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2); // this line of code will be do as same as the code above
// // Tip : if we store the numGuests to zero on the first line of our codes like this: restaurant.numGuests = 0 the default value wont work for both of them

// console.log('---AND---');
// console.log(0 && 'jonas'); // and operator short circuits the first value that is falsey
// console.log(7 && 'jonas'); // result => jonas

// console.log('Hello' && 23 && null && 'jonas'); // result => null
// // the reason of the and operator for picking falsey values is that when the operator reach a falsey value the whole values will be falsey then it will return the falsey value as a result

// // ---------------------------------------------------
// if (restaurant.orderPizza) {
//    restaurant.orderPizza('Mushrooms', 'Spinach');
// }

// // we can use the code above in a simplar way:
// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');
// // these two code blocks will work exactly the same
// // ---------------------------------------------------

// // Summary: the or operator will return the truthy value but the and operator will retunr the falsey value
// // we use the OR operator to set default values and we use the AND operator to execute codes in the second operand if the first one is true

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // <<The Nullish Coaleasing operator>>

// 'use strict';
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanati 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Frocaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thru: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24, // Open 24 hours
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };

// // in this block of code we have a problem and as told in the previous section the problem is that we dont want the "10" to be the value of the numGuests and we want to set the "0" for it
// //so here we want to think of an solution:
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests2);

// // Nulish: null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Logical assignment operators >>

// 'use strict';
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanati 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Frocaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     openingHours: {
//       thru: {
//         open: 12,
//         close: 22,
//       },
//       fri: {
//         open: 11,
//         close: 23,
//       },
//       sat: {
//         open: 0,
//         close: 24, // Open 24 hours
//       },
//     },
//     order: function (starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
//     orderDelivery: function ({
//       starterIndex = 1,
//       mainIndex = 0,
//       time = '20:00',
//       address,
//     }) {
//       console.log(
//         `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//       );
//     },
//     orderPasta: function (ing1, ing2, ing3) {
//       console.log(
//         `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//       );
//     },
//     orderPizza: function (mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient);
//     },
//   };
//   const rest1 = {
//     name: "Capri",
//     // numGuests: 20,
//     numGuests: 0,  // *this line of code will make a mistake in our codes
//   };
//   const rest2 = {
//     name: "La Piazza",
//     owner: "Giovanni Rossi",
//   };
// // now in here we want to set an default value for numGuests for those objects which dont have it
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1);
// console.log(rest2);
// // instead of this type of code we can write it like this:
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);
// // the result is the same

// // *Solution to the problem:
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// // Logical AND operator:

// rest1.owner = rest1.owner && "<ANONYMOUS>"; // result => ANONYMOUS
// rest2.owner = rest2.owner && "<ANONYMOUS>"; // result => ANONYMOUS

// console.log(rest1);
// console.log(rest2);

// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);
// // the result is the same

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Coding challenge #1>>
// // we start building a footbal betting app (soccer for my American friends😅)!

// /* suppose we get data from a web service about a certain game (below). in this challene we're gonna
//  work with the data. so here are the your tasks:

//  1.Create one player array for each team (variables 'players1' and 'players2')

//  2. The first player in any player array is the goalkeeper and the others are field players. for Bayern Munich
//  (team1) create one variable ("gk") with the goalkeeper's name, and one array
//  ("fieldPlayers") with all the remaining 10 field players.

//  3. Create an array "allPlayers" containing all players of both teams (22 players)

//  4. During the game, Bayern Munich (team 1) used 3
//  substitute players. so create a new array ('players1Final)
//  containing all the original team1 players plus "Thiago","Coutinho",
//  and "Perisic".

//  5. Based on the game.odds object,create one variable for each odd
//  (called "team1","draw" and "team2")

//  6. Write a function ("printGoals") that receives an
//  arbitrary number of player names (NOT an array) and
//  prints each of them to the console, along with the
//  number of goals who were scored (number of player
//   names passed in).

//   7. The team with the lower odd is more likely to win.
//   Print to the console which team is more likely to
//   win,WITHOUT using an if/else statement or the ternary operator.

//   TEST DATA FOR 6: Use players "Davies","Muller",
//   "Lewandowski", and "Kimmich". then call the function
//   again with players from game.scored

//   GOOD LUCK 😉
//   */

// 'use strict';
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretkza',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowki', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 1.33,
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // .1
// const [players1, players2] = game.players;
// // .2
// const [gk, ...fieldPlayers] = players1;
// // .3
// const allPlayers = [...players1, ...players2];
// // .4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // .5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // .6
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);
// // .7
// team1 < team2 && console.log('Team 1 is more likely to win!');
// team2 > team1 && console.log('Team 2 is more likely to win!');

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Looping arrays The for-of Loop >>

// // this is the basic form of a FOR_OF LOOP
// // for (const iterator of object) {

// // }

// // now we want to use it in a example:

// 'use strict';
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanati 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Frocaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     openingHours: {
//       thru: {
//         open: 12,
//         close: 22,
//       },
//       fri: {
//         open: 11,
//         close: 23,
//       },
//       sat: {
//         open: 0,
//         close: 24, // Open 24 hours
//       },
//     },
//     order: function (starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
//     orderDelivery: function ({
//       starterIndex = 1,
//       mainIndex = 0,
//       time = '20:00',
//       address,
//     }) {
//       console.log(
//         `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//       );
//     },
//     orderPasta: function (ing1, ing2, ing3) {
//       console.log(
//         `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//       );
//     },
//     orderPizza: function (mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient);
//     },
//   };

//   const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

//   for (const item of menu) // this loop will loop the entire array then have access to the items in it
//   console.log(item); // we dont have to make a code block when we have 1 line
//   // in the for of loop we are able to use CONTINUE and BREAK

//   for(const item of menu.entries())
//   {
//     console.log(`${item[0] + 1} : ${item[1]} `);
//   }
//   // this is the old way of destructoring the items
//   console.log([...menu.entries()]); // its an array which in each position contains a new array which contains the element and the index number of the original array
// // here is the new way:

// for(const [i,el] of menu.entries())
// {
//   console.log(`${i + 1}: ${el}`);
// }
// // so now we made it easier using the destructoring

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // <<Enhanced Object Literals>>

// 'use strict';
// const weekdays = ['mon','tue','wed','thu','fri','sat','sun'];
// const openingHours ={
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${4 + 1}`]: {
//     open: 0,
//     close: 12 + 12, // Open 24 hours
//   },
// };
// const restaurant = {
//       name: 'Classico Italiano',
//       location: 'Via Angelo Tavanati 23, Firenze, Italy',
//       categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//       starterMenu: ['Frocaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//       mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//       openingHours,
//       // in the function above we have a "Function" keyword but in the ES6 we can remove that and write it in a modern way
//       order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//       },
//       // modern way:
//       orderDelivery({
//         starterIndex = 1,
//         mainIndex = 0,
//         time = '20:00',
//         address,
//       }) {
//         console.log(
//           `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//         );
//       },
//       orderPasta(ing1, ing2, ing3) {
//         console.log(
//           `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//         );
//       },
//       orderPizza (mainIngredient, ...otherIngredient) {
//         console.log(mainIngredient);
//         console.log(otherIngredient);
//       },
//     };

// // Summary of what we do in this code: we move the openingHours property out of the object then we write it in a modern way
// // we change the syntax of functions inside the object
// // we write the title properties inside the openingHours object in a more modern way and show a unique way of writing them title proprties in the last property

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Optional Chaining >>

// // a new feature of objects and also of arrays

// 'use strict';
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${4 + 1}`]: {
//     open: 0,
//     close: 12 + 12, // Open 24 hours
//   },
// };
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanati 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Frocaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,
//   // in the function above we have a "Function" keyword but in the ES6 we can remove that and write it in a modern way
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   // modern way:
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//     );
//   },
//   orderPizza(mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };

// // so lets say that we wanted to get the openingHours of our restaurant for monday

// console.log(restaurant.openingHours.mon.open); // this property doesnt exist

// // so in here lets pretend that we dont know if the restaurant is open on monday or not
// if (restaurant.openingHours.mon)
//   if (restaurant.openingHours && restaurant.openingHours.mon)
//     console.log(restaurant.openingHours.mon.open);

//     // now we want to take it to the next level

//     console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open); // this works as same as the first if
// console.log(restaurant.openingHours?.mon?.open); // this works as same as the second if

// // EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} ,we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // this method exists
// console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist'); // this method does not exist

// // Arrays

// const user = [{ name: 'jonas', email: 'hello@jonas.io' }];
// console.log(user[0]?.name ?? "User array empty");
// // this is the new way to use the optinonal chaining

// // this is the old way:
// if(user.length > 0) console.log(user[0].name);
// else console.log("User array empty");
// // so as you can see it is a lot of work to write it like this 😅

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Looping Object keys, values and entries >>

// 'use strict';

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${4 + 1}`]: {
//     open: 0,
//     close: 12 + 12, // Open 24 hours
//   },
// };
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanati 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Frocaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,
//   // in the function above we have a "Function" keyword but in the ES6 we can remove that and write it in a modern way
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   // modern way:
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//     );
//   },
//   orderPizza(mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };

// // we want to make an array of one object property of the object above using FOR-OF LOOP

// // Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days :`;
// for(const day of properties)
// {
//   openStr += `${day},`;
// }
// console.log(openStr);

// // Property Values
// const values = Object.values(openingHours);
// console.log(values);
// // this will give us the value inside the object called

// // now we want to use a way to return the key and value of the object together
// // Entries Object

// const entries = Object.entries(openingHours);
// // console.log(entries);

// for(const [key,{open,close}] of entries){
//   console.log(key,open,close); // now we have each key and each values
//   console.log(`On ${key} we open at ${open} and close at ${close}`); // like arrays we can use destructoring right here
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Coding Challenge >>

// /* let's continue with our footbal betting app!

// 1. Loop over the game.scored array and print each
// player name to the console, along with the goal
// number (Example: "Goal 1: Lewandowski")

// 2. Use a loop to calculate the average odd and log it
// to the console (We already studied how to calculate averages,
//   you can go check if you dont remember)

// 3. Print the 3 odds to the console, but in a nice
// fomatted way, exactly like this:
//         Odd of victory Bayern Munich : 1.33
//         Odd of draw : 3.25
//         Odd of victory Borrussia Dortmund : 6.5
// Get the team names directly from the game object,
// don't hardcode them(except for "draw") HINT: Note
// how the odds and the game objects have the same
// property names

// BONUS: Create an object called "scorers" which
// contains the names of the players who scored as
// properties, and the number of goals as the value. In
// this game, it will look like this:
// {
//     Gnarby: 1,
//     Hummels: 1,
//     Lewandowski: 2
// }

// GOOD LUCk 😉

// */
// const scorers = {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2,
// };
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretkza',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scorers,
//   date: 1.33,
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// for (const [i, player] of Object.entries(scorers))
//   console.log(`Goal ${i + 1} : ${player}`);

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Sets >>

// const orderSet = new Set([
//   'Pizza',
//   'Pizza',
//   'Pasta',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet); // this method will remove the repeated values inside the array

// console.log(new Set('Jonas')); // and it can be used to slice the strings

// console.log(orderSet.size); // we can get the size of the seted array like this

// console.log(orderSet.has('Bread')); // we can check if an element is in the seted array or not

// orderSet.add('Bread'); // we can add an value to the set
// console.log(orderSet);

// orderSet.delete('Bread'); // we can remove the value of the set
// console.log(orderSet);

// // orderSet.clear(); // // we can clear all the elements in the set
// // console.log(orderSet);

// // we can use loop for the set
// for (const order of orderSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// // const staffUnique = new Set(staff);
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// console.log(new Set("jonasschmedtman").size);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Maps Fundementals >>

// 'use strict';

// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze Italy');
// console.log(rest.set(2, 'Lisbon Portugal'));

// rest
//   .set('Categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// // this block of code will check the condition and return one of the values inside the map

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();

// // we can use arrays or objects as map keys
// const arr = [1,2];
// rest.set(arr,'Test');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// // in this way we cant use the array as map key:
// rest.set([1,2],"Test");
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get([1,2])); // this line will return undefined

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Maps Iteration >>

// 'use strict';
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${4 + 1}`]: {
//     open: 0,
//     close: 12 + 12, // Open 24 hours
//   },
// };
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanati 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Frocaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,
//   // in the function above we have a "Function" keyword but in the ES6 we can remove that and write it in a modern way
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   // modern way:
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//     );
//   },
//   orderPizza(mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// /* const answer = Number(prompt('Your answer')*/ const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Converting map to array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
// // for a better view we will put them in a new array

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Summary-which data structure to use >>

// // couple of notes:

// // we have some source of data
// // 1. From the program itself: Data written directly in source code(e.g. status message)
// // 2. From the UI: Data input from the user of data written in DOM (e.g. tasks in todo app)
// // 3. From external storage: Data fetched for example from web API (e.g. recipe objects)\

// // API : Application Programming Interface

// // so no matter where the data comes from and what kind of data it is, we ususally always have collections of data that we then need to store them somewhere

// //                                               --COLLECTION OF DATA--
// //
// //
// //                                                      -👇-
// //
// // where do we store collection of data??         --DATA STRUCTURE--

// // in Javascript we have 4 built in data structure

// // if we need a simple list of values we can use ARRAY or SET
// // if we need key value pairs then we need to use OBJECTS or MAPS => keys allows us to describe values

// // JSON: (JavaScript Object Notation) is a lightweight data interchange format that can be read by all the programming languages

// // OTHER BULIT-IN DATA STRUCTURES:  WeakMap, WeakSet
// // NON-BULIT-IN: Stacks, Queues, Linked lists, Trees, Hash tables

// // << ARRAYS VS. SETS AND OBJECTS VS. MAPS >>

// console.log('--ARRAYS VS SETS--');
// // ARRAYS:
// const arrTasks = ['Code', 'Eat', 'Code'];
// console.log(arrTasks);

// // 👉 Use when you need ORDERED list of values (might contain duplicates)
// // 👉 Use when you need to MANIPULATE data

// // SETS:
// const setTasks = new Set(['Code', 'Eat', 'Code']);
// console.log(setTasks);
// // {"Code","Eat"}

// // 👉 Use when you need to work with UNIQUE values
// // 👉 Use when HIGH_PERFORMANCE is really important
// // 👉 Use to REMOVE DUPLICATES from arrays

// console.log('--OBJECTS VS MAPS--');
// // OBJECTS:
// const objectTask = {
//   tasks: 'Code',
//   date: 'today',
//   repeat: true,
// };
// console.log(objectTask);

// // 👉 More "traditional" key/value store ("abused" objects)
// // 👉 Easier to write and access value with . and []

// // MAPS:
// const mapTask = new Map([
//   ['tasks', 'Code'],
//   ['data', 'today'],
//   [false, 'Start coding!'],
// ]);
// console.log(mapTask);

// // 👉 Better performance
// // 👉 Keys can have ANY data type
// // 👉 Easy to iterate
// // 👉 Easy to compute size

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Coding challenge #3 >>

// /*
// let's continue with our football betting app! this time,
// we have a map with a log of the events that happened during the game .
// The values are the events themselves and the keys are the
// minutes in which each event happened (a football game has 90 minutes plus some extra time)

// 1. Create an array 'events' of the different game
// events that happened (no duplicates)

// 2. After the game has finished, is was found that the
// yellow card from minute 64 was unfair. So remove this
// event from the game events log.

// 3. print the following string to the console: "An
// event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// 4. Loop over the events and log them to the console
// marking whether it's in the first half or second half
// (after 45 min) of the game like this:
//      [FIRST HALF] 17 : ⚽ GOAL

// GOOD LUCK 😉
// */
// const gameEvents = new Map([
//   [17,'⚽ GOAL'],
//   [36,'🔁 Substitution'],
//   [47,'⚽ GOAL'],
//   [61,'🔁 Substitution'],
//   [64,'🟡 Yellow card'],
//   [69,'🔴 Red card'],
//   [70,'🔁 Substitution'],
//   [72,'🔁 Substitution'],
//   [76,'⚽ GOAL'],
//   [80,'⚽ GOAL'],
//   [92,'🟡 Yellow card'],
// ]);

// // 1.
// const evnets = new Set([...gameEvents.values()]);
// console.log(evnets);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// const time = [...gameEvents.keys()].pop();
// console.log(`An
// event happened, on average, every ${time / gameEvents.size} minutes`);

// // 4.
// for (const[key,value] of gameEvents){
//   console.log(  key > 45 ? `[SECOND HALF] ${key} : ${value}` : `[FIRST HALF] ${key} : ${value}`
//   );
// } // this is my solution

// // now jonas solution:

// for (const [min,event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min} : ${event}`);
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Working with strings >>

// 'use strict';
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r')); // strings are also 0 based
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// // Slice method
// console.log(airline.slice(4)); // this will show the string after the 4 index
// console.log(airline.slice(4, 7)); // this one will show the string from the 4th index to the 7th index
// // the length of the second way of using the slice method is = 7 - 4 = 3 => length

// console.log(airline.slice(0, airline.indexOf(' '))); // this will result as the first word of the string
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // this will result as the last word of the string

// console.log(airline.slice(-2)); // we can do negative parameters for the slice method
// console.log(airline.slice(1, -1)); // we can do negative end parameter

// // Example : write a function that receives a airplane seat and log to the console wheter it is a middle seat or not

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1); // this will start counting one from the right side
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😁');
//   else
//     console.log('You got lucky 😎, now i can fuck youre momma on the middle seat 🥰');
//   ;
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Working with strings pt 2 >>

// 'use strict';
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// // these methods will translate the stirng to lower case or to upper case

// // Fix capitalization in name
// const passenger = 'jOnAs'; // jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // we could create an function for this

// // Comparing Emails
// const email = 'hello@jonas.io';
// const loginEmail = 'Hello@jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase(); // first step that we gonna do
// const trimmedEmail = lowerEmail.trim(); // second step that we gonna do
// console.log(trimmedEmail); // the result 1

// const normalizedEmail = loginEmail.toLowerCase().trim(); // no we can do all the steps in just one step
// console.log(normalizedEmail); // the result 2
// console.log(email === normalizedEmail);
// // now we can see that the results are exactly the same

// // Replacing
// const priceGB = '288,97#'; // we want to change the # sign to the $ sign and change the ',' with '.'
// const priceUS = priceGB.replace('#', '$').replace(',', '.');
// console.log(priceUS);

// const announcment =
//   'All passengers come to boarding door 23, Boarding door 23!';
// console.log(announcment.replaceAll('door', 'gate')); // one way of replacing all the 'door's to 'gate'
// console.log(announcment.replace(/door/g, 'gate')); // another way of replacing all the 'door's to 'gate'

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); // this will result as true
// console.log(plane.includes('Boeing')); // this will result as fasle
// console.log(plane.startsWith('Airb')); // this will check that our strings is start with??

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun'))
//   console.log('You are NOT allowed on board');
// else
// console.log('Welcome abroad');
// };
// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Working with strings pt 3 >>

// 'use strict';

// // Split
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);
// // writing a function to capitalize the first letter of the strings
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     // a diffrent way:
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// // Padding the string: to add a number of characters to the string until the string has a certain desired length
// const message = 'Go to gate 23';
// console.log(message.padStart(25,'+').padEnd(30,'+')); // after the message that reached 25 character the string padding will be continued till the 35 character 
// console.log('Jonas'.padStart(25,'+').padEnd(30,'+'));

// const maskCreditCard = function(number){
//   const string = number + ''; // this will convert the number to a string 
//   // const string = String(number); // we could do it like this but the way above was better
//   const last = string.slice(-4);
//   return last.padStart(string.length, '*'); 
// }

// console.log(maskCreditCard(12345678));
// console.log(maskCreditCard(52135253462756858585));
// console.log(maskCreditCard('518957198758917519759'));
// // this piece of code will work yeah!😄

// // Repeat method: this will allow us to repeat the same string multiple times
// const message2 = 'Bad weather... All Departues Delayed...';
// console.log(message2.repeat(5)); // this will repeat the message 5 times

// const planesInLine = function (n){
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// }
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// // this piece of code is actully work too! (honestly IDGAF but whatever)😑

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
