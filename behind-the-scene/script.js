// 'use strict';
// // we have a problem:

// const me =
// {
//   firstName : "jonas",
//   age: 30,
// }
// const friend = me;
// friend.age = 27;
// console.log("Me:",me);
// console.log("Friend:",friend);

// // this way we cant copy the me object info in the friend and then change the age of the friend 
// //the output will change the both objects age


// // Now whats the solution?

// const friend = Object.assign({},me);
// friend.age = 27;
// console.log("Me:",me);
// console.log("Friend:",friend);
// in this solution now we can copy the me object info in an empty object then change the age of it

// -----------------------------------------------------------------------------------------------------------------------------------------------

'use strict';
