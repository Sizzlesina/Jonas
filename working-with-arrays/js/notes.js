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
