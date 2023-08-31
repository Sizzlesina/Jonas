/** @format */

//           _________________________________________________________ ASYNCHRONOUS __________________________________________________________

// << Asynchronous JavaScript, AJAX and API >>

// // 👉 Most code is Synchronous
// // 👉 Synchronous code is executed line by line
// // 👉 Each line of code waits for previous to finish
// //
// // an small exmaple:
// const p = document.querySelector(".p");
// p.textContent = "My name is Jonas!";
// alert("Text set!")
// p.style.color = "red";

// // Asynchronous
// // now we want to talk about asynchronous Code
// const p = document.querySelector(".p");
// setTimeout(function () {
//   p.textContent = "My name is Jonas!";
// }, 5000);
// p.stlye.color = "red";
// // now in this line of code we implementing a asynchronous code which is the setTimweout function

// // 👉 Asynchronous code is executed after a task that runs in the 'background' finishes;
// // 👉 Asychronous code is non_blocking
// // 👉 Execution doesnt wait for an asynchronous task to finish its work
// // 👉 callback function alone do not make code asynchronous

// // so in summary asynchronous programming is all about co-ordinating the behavior of our program over a certain period of time

// // another example of asynchronous programming:
// const p = document.querySelector(".p");
// const img = document.querySelector(".dog");
// img.src = 'dog.png';
// img.addEventListener("load",function(){
//   img.classList.add("fadeIn");
// });
// p.style.width ="380px";
// // this code wont work in the real file in this document and its just for example

// AJAX => Asynchronous Javascript And Xml allows us to communicate with remote web servers in an asynchronous way. with ajax calls we can request data from web servers dynamically


// what is an API :
// Application Programming Interface, piece of software that can be used by another pieces of software, in order to allow applications to talk to each other
 
// there are be many types of API in web development:
// 1. DOM API - 2. Gelocation API - 3. Own class API - 4. Online API *IMPORTANT*
 
// soooooo in this video jonas just give me some information about the ajax and asynchronous and stuff like that and we dont really get into coding

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // << Our first AJAX call XMLHttpRequest >>

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector('.countries')

// const getCountry = function(country){
// const request = new XMLHttpRequest();
// request.open("GET",`https://restcountries.com/v2/name/${country}`);
// request.send();

// console.log(request.responseText);

// request.addEventListener("load",function(){
//   const [data] = JSON.parse([this.responseText]);
//   console.log(data);
//   const html = `
//   <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//   `
//   countriesContainer.insertAdjacentHTML("beforeend",html);
//   countriesContainer.style.opacity = 1;
// });
// }
// getCountry('iran');
// getCountry("usa");
// getCountry("portugal");
// getCountry("russia");






// // HINT :
// //--------------------------------------------------
// // when we get data from a site that always an backend developer will send the data to us we can manage the data like this 
// // so the steps are:
// // 1. first we will get the data in a JSON format
// // 2. then we convert the data to a javascript format and then do the rhings that we want on the data and write our code 
// // it that simple and the data will be given by a backend developer so we just only need a frontend UI for the data
// // for example we can have an object with an empty value and the values of the object will be given to us by the backend developer
// // alright i think the description was too long so lets go to continue the course
// //---------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // << Welcome to callback hell>>


// 'use strict';
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector('.countries')


// // this function were added to make our code cleaner
// const renderCountry = function(data,className = ''){
//   const html = `
//   <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>`
//         countriesContainer.insertAdjacentHTML("beforeend",html);
//         countriesContainer.style.opacity = 1;
// }

// const getCountryAndNeighbours = function(country){
//   // AJAX call country 1
//   const request = new XMLHttpRequest;
//   request.open("GET",`https://restcountries.com/v2/name/${country}`);
//   request.send();

//   console.log(request.responseText);

//   request.addEventListener("load",function(){
//     const [data] = JSON.parse([this.responseText])
//     console.log(data);
//     // Render Country 1
//     renderCountry(data);

//     // Get neighbour country 2 
//     const neighbour = data.borders[0];

//      if(!neighbour) return;

//      // AJAX call country 2
//      const request2 = new XMLHttpRequest;
//      request2.open("GET",`https://restcountries.com/v2/alpha/${neighbour}`)
//      request2.send();

//      request2.addEventListener('load',function(){
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2,'neighbour') // the class that we added in here was written before ny the jonas

//       // here we have a callback function inside an another one that is called the nested function AND THIS IS CALLED "CALLLBACK HELL";
//      })
//   })
// }
// getCountryAndNeighbours("portugal");
// getCountryAndNeighbours("usa");

// // an exmaple for callback hell
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//     },1000)
//   }, 1000);
// },1000)
// // this function thay have a lot of nested functions is called callback hell

// // is callback hell a good thing ? NO
// // so whats the solution? IN THE NEXT VIDEO

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Promises and the Fetch >>

// // thius video is tell about the solution to the callback hell

// // the modern way of AJAX call is to use the "fetch "

// 'use strict';
 
// const request = fetch("https://restcountries.com/v2/name/iran");
// // this line of code will behave as same as the GET method that we used for XMLHttpRequest 
// console.log(request); // now we have an promise\


// // PROMISE => An object that is used as a placeholder for the future result of an asynchronous operation.

// // a less fomral defenition of promise => a container for an asynchronously delivered value.

// // Promise => a container for a future value.

// // we no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results.

// // instead of nesting callbacks we can chain promises for a sequence of asynchronous operations escaping callback hell.

// // so in this video jonas just talked some about the promises and give some descriptions and defenitions and in the next video we wanna see the promises use case

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
