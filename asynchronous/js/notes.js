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

// // // an exmaple for callback hell
// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 seconds passed');
// //     setTimeout(() => {
// //       console.log('3 seconds passed');
// //     },1000)
// //   }, 1000);
// // },1000)
// // // this function thay have a lot of nested functions is called callback hell

// // // is callback hell a good thing ? NO
// // // so whats the solution? IN THE NEXT VIDEO

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Promises and the Fetch >>

// // thius video is tell about the solution to the callback hell

// // the modern way of AJAX call is to use the "fetch "

// 'use strict';

// const request = fetch(c);
// // this line of code will behave as same as the GET method that we used for XMLHttpRequest
// console.log(request); // now we have an promise\

// // PROMISE => An object that is used as a placeholder for the future result of an asynchronous operation.

// // a less fomral defenition of promise => a container for an asynchronously delivered value.

// // Promise => a container for a future value.

// // we no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results.

// // instead of nesting callbacks we can chain promises for a sequence of asynchronous operations escaping callback hell.

// // so in this video jonas just talked some about the promises and give some descriptions and defenitions and in the next video we wanna see the promises use case

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Consuming Promises >>

// 'use strict';
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector('.countries')

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

// const request = fetch("https://restcountries.com/v2/name/iran")
// console.log(request);

// const getCountryData = function(country){
//   fetch(`https://restcountries.com/v2/name/${country}`).then(response => response.json()).then(data => renderCountry(data[0]));
// }
// getCountryData('portugal')
// // in here we write the getCountry function using the fetch method and more shorter than the last one

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Chaining promises >>

// "use strict";
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");
// const renderCountry = function (data, className = "") {
//   const html = `
//     <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(1)}</p>
//               <p class="country__row"><span>🗣️</span>${
//                 data.languages[0].name
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies[0].name
//               }</p>
//             </div>
//           </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour"));
// };
// getCountryData("portugal");

// // we just rewrite the last codes that we written using the XMLHttpRequest using chaining fetch methods

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Handling rejected promises >>

// "use strict";
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const renderError = function(msg){
//   countriesContainer.insertAdjacentHTML('beforeend',msg);
// }
// const renderCountry = function (data, className = "") {
//   const html = `
//     <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(1)}</p>
//               <p class="country__row"><span>🗣️</span>${
//                 data.languages[0].name
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies[0].name
//               }</p>
//             </div>
//           </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
// };
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour")).catch((err) =>
//     {
//      console.error(`${err} 💥💥💥 `);
//     renderError(`Something went wrong 💥💥 ${err.message}. Try again!`)
//     }).finally(() => {
//       // this method will get used for spinners
//       countriesContainer.style.opacity = 1;

//       // in the finally method no matter if the promise is fullfield or rejected the callback function inside the method

//       // this works cause catch itself also returns a promise
//     })
// };
// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });

// getCountryData("gksnkgsngis") // when we have a error like this we get a weird error showing on the screen and we want to only tell the user that the country wasnt found so what we must do?? SEE IN THE NEXT VIDEO

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Throwing errors manually >>

// "use strict";
// // in this lecture we wanna fix the 404 error problem

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentHTML("beforeend", msg);
// };
// const renderCountry = function (data, className = "") {
//   const html = `
//     <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(1)}</p>
//               <p class="country__row"><span>🗣️</span>${
//                 data.languages[0].name
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies[0].name
//               }</p>
//             </div>
//           </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
// };
// const getJSON = function(url,errorMsg){
//   return fetch(url).then(response => {
//     if(!response.ok)
//     throw new Error(`${errorMsg} (${response.status})`)
//     return response.json();
//   })
// }
// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`,'Country not found!')
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error("No neighbour found!"); // this line is for when a country has no neighbour

//       // Country 2
//       return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,"Country not found");
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 💥💥💥 `);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });

// getCountryData("australia");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Coding Challenge #1 >>

// /*
// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// Here are your tasks:

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// GOOD LUCK 😀
// */
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");
// const renderCountry = function (data, className = "") {
//   const html = `
//       <article class="country ${className}">
//               <img class="country__img" src="${data.flag}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   data.languages[0].name
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   data.currencies[0].name
//                 }</p>
//               </div>
//             </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };
// const whereAmI = function (lat, lng) {
//   fetch(" https://geocode.xyz/52.508,13.381?geoit=json")
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Geocoding is failed (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You live in ${data.city}.${data.country}`);
//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} 💥`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// // the API in this coding challenge is not working

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Asynchronous behind the scene >>

// just some descriptions that i can find out later in the sites but now i just watched it

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Building a simple promise >>

// "use strict";
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is happening 🔮`);
//   setTimeout(() => {
//     if (Math.random() <= 0.5) {
//       resolve("You WIN 💰");
//     } else {
//       reject(new Error("You lost your money 💩"));
//     }
//   }, 2000);
// });
// lotteryPromise
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
// };
// wait(2)
//   .then(() => {
//     console.log(`2 second passed`);
//     return wait(1);
//   })
//   .then(() => console.log(`3 second passed`))
//   .then(() => console.log(`4 second passed`)); // *
// // this function here will work exactly as same as the function beyond
// //---------------------------------------------------
// //  setTimeout(() => { // *
// //   console.log(`1 second passed`);
// //   setTimeout(() => {
// //     console.log(`2 second passed`);
// //     setTimeout(() => {
// //       console.log(`3 second passed`);
// //       setTimeout(() => {
// //         console.log(`4 second passed`);
// //       },1000)
// //     },1000)
// //   },1000)
// // },1000)

// Promise.resolve("abc").then((x) => console.log(x));
// Promise.reject(new Error("Problem!")).catch((x) => console.error(x));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Promisifying the Geolocation >>

// // // there's two way of writing the first function in this video:

// // // FIRST WAY OF WRITING THIS FUNCTION:
// // const getPosition = function () {
// //   return new Promise(function (resolve, reject) {
// //     navigator.geolocation.getCurrentPosition(
// //       (position) => resolve(position),
// //       (error) => reject(error)
// //     );
// //   });
// // };

// // // SECOND WAY OF WRITING THIS FUNCTION:
// // const getPosition = function () {
// //   return new Promise(function (resolve, reject) {
// //     navigator.geolocation.getCurrentPosition(resolve, reject);
// //   });
// // };

// // we want to rewrite the whereAmI function but this time using the geolocation of our device and not an external API\

// ("use strict");

// const btn = document.querySelector(".btn-country");
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const renderCountry = function (data, className = "") {
//     const html = `<article class="country ${className}">
//                   <img class="country__img" src="${data.flag}" />
//                   <div class="country__data">
//                     <h3 class="country__name">${data.name}</h3>
//                     <h4 class="country__region">${data.region}</h4>
//                     <p class="country__row"><span>👫</span>${(
//                       +data.population / 1000000
//                     ).toFixed(1)}</p>
//                     <p class="country__row"><span>🗣️</span>${
//                       data.languages[0].name
//                     }</p>
//                     <p class="country__row"><span>💰</span>${
//                       data.currencies[0].name
//                     }</p>
//                   </div>
//                 </article>`;
//     countryContainer.insertAdjacentHTML("beforeend", html);
//     countryContainer.style.opacity = 1;
//   };
// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} 💥`));
// };

// btn.addEventListener("click",whereAmI);
// // NOTE : The API's in this video are not working (because of the good networking stuff you know..?)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Coding challenge #2 >>

// /*
// Build the image loading functionality that I just showed you on the screen.

// Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

// PART 1
// 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

// If this part is too tricky for you, just watch the first part of the solution.

// PART 2
// 2. Comsume the promise using .then and also add an error handler;
// 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
// 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
// 5. After the second image has loaded, pause execution for 2 seconds again;
// 6. After the 2 seconds have passed, hide the current image.

// TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

// GOOD LUCK 😀
// */

// "use strict";
// const imgContainer = document.querySelector(".images");
// const wait = function (seconds) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;

//     img.addEventListener("load", function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("Image not found!"));
//     });
//   });
// };

// let currentImg;
// createImage('pic/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('pic/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// // im getting some kind of confused right now

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Consuming promises with Async/Await >>

// const countryContainer = document.querySelector(".countries");
// const btn = document.querySelector(".btn-country");
// const renderCountry = function (data, className = "") {
//   const html = `<article class="country ${className}">
//                 <img class="country__img" src="${data.flag}" />
//                 <div class="country__data">
//                   <h3 class="country__name">${data.name}</h3>
//                   <h4 class="country__region">${data.region}</h4>
//                   <p class="country__row"><span>👫</span>${(
//                     +data.population / 1000000
//                   ).toFixed(1)}</p>
//                   <p class="country__row"><span>🗣️</span>${
//                     data.languages[0].name
//                   }</p>
//                   <p class="country__row"><span>💰</span>${
//                     data.currencies[0].name
//                   }</p>
//                 </div>
//               </article>`;
//   countryContainer.insertAdjacentHTML("beforeend", html);
//   countryContainer.style.opacity = 1;
// };
// const geoPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function (country) {
//   // this function will keep running in the background while performing the code inside of it then when the function is done it automatically returns a promise
//   const pos = await geoPosition();
//   const { latitude: lat, longtitude: lng } = pos.coords;
//   const resGeo = fetch(`https//geocode.xyz/${lat},${lng}?geoit=json`);
//   const dataGeo = (await resGeo).json();
//   console.log(dataGeo);

//   const res = await fetch(`https://restcountries.com/v2/name/${country}`);
//   console.log(res);
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0]);
//   //  // the line of code above is exactly as same as writing the function like this:
//   //  fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))
// };
// whereAmI();
// console.log("__ FIRST __");
// // this function is a asynchronous function but it looks like a synchronous function

// // async await methods can be used inside the then method ?? YES WE CAN

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Error handling with try... catch >>

// 'use strict';
// const countryContainer = document.querySelector(".countries");
// const btn = document.querySelector(".btn-country");
// const renderCountry = function (data, className = "") {
//   const html = `<article class="country ${className}">
//                 <img class="country__img" src="${data.flag}" />
//                 <div class="country__data">
//                   <h3 class="country__name">${data.name}</h3>
//                   <h4 class="country__region">${data.region}</h4>
//                   <p class="country__row"><span>👫</span>${(
//                     +data.population / 1000000
//                   ).toFixed(1)}</p>
//                   <p class="country__row"><span>🗣️</span>${
//                     data.languages[0].name
//                   }</p>
//                   <p class="country__row"><span>💰</span>${
//                     data.currencies[0].name
//                   }</p>
//                 </div>
//               </article>`;
//   countryContainer.insertAdjacentHTML("beforeend", html);
//   countryContainer.style.opacity = 1;
// };
// const geoPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await geoPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');

//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );

//     // BUG in video:
//     // if (!resGeo.ok) throw new Error('Problem getting country');

//     // FIX:
//     if (!res.ok) throw new Error('Problem getting country');

//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);
//   }
// };
// // we use the try method to get any errors that happen inside of its block and then we use the catch method on it to catch the errors and then show it as the way as we want
// // i think the try catch method is getting used for when we load too fast and the data isnt getting loaded so we can show an error to the user interface part

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Returning values from Async function >>
// 'use strict';
// const countryContainer = document.querySelector(".countries");
// const btn = document.querySelector(".btn-country");
// const renderCountry = function (data, className = "") {
//   const html = `<article class="country ${className}">
//                 <img class="country__img" src="${data.flag}" />
//                 <div class="country__data">
//                   <h3 class="country__name">${data.name}</h3>
//                   <h4 class="country__region">${data.region}</h4>
//                   <p class="country__row"><span>👫</span>${(
//                     +data.population / 1000000
//                   ).toFixed(1)}</p>
//                   <p class="country__row"><span>🗣️</span>${
//                     data.languages[0].name
//                   }</p>
//                   <p class="country__row"><span>💰</span>${
//                     data.currencies[0].name
//                   }</p>
//                 </div>
//               </article>`;
//   countryContainer.insertAdjacentHTML("beforeend", html);
//   countryContainer.style.opacity = 1;
// };
// const geoPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await geoPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();

//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );

//     // BUG in video:
//     // if (!resGeo.ok) throw new Error('Problem getting country');

//     // FIX:
//     if (!res.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city},${dataGeo.country}`
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }
// };
// console.log(`1: Will get location`);
// // const city = whereAmI();
// // console.log(city);

// // whereAmI().then(city => console.log(city)).catch(err => console.log(`2:${err.message} 💥`)).finally( () => console.log('3: Finished getting location'));

// (async function(){
//   try{
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   }catch(err){
//     console.error(`2: ${err.message}`);
//   }
//   console.log(`3: Finished getting location`);
// })();

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Running promises in parallel >>

// // in this video we want to get data from 3 countries at the sane time but in which the oreder that the data arrives does not matter at all

// "use strict";
// const getJSON = function (url, errorMsg = "Something went wrong!") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data.map((d) => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries("portugal", "canada", "tanzania");
// // THIS PART IS SO IMPORTANT

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Other promise combinations  >>

// // Promise.race => Like other combinators receives an array of promises and it als returns a promise

// const getJSON = function (url, errorMsg = "Something went wrong!") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };
// // Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long!`));
//     }, sec);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/tanzania`),
//   timeout(20),
// ]).then(
//   (res) => console.log(res[0]),
//   (err) => console.error(err)
// );

// // Promise.allSettled => it takes a array of promises and it will return an array of all the settled promises no matter the promise got rejected or not

// // this method is simillar to the promise.all in regard that it also returns an array of all the results but the difference is that the promise.all will short cicuit as soon as one promise rejects but Promise.allSettled simply never short cicuits so it will simply retuns all the results of all the promises

// Promise.allSettled([
//   Promise.resolve("Success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Anothe rSuccess"),
// ]).then(res => console.log(res));

// // this method will check for the reject and then returns the rejected one
// Promise.all([
//   Promise.resolve("Success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Anothe rSuccess"),
// ]).then(res => console.log(res)).catch(err => console.error(err));

// // Promise.any [ES2021] => it will takes an array of Promises, and returns a new Promise that resolves with the value of the first fulfilled Promise in the array.

// Promise.any([
//   Promise.resolve("Success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Anothe rSuccess"),
// ]).then(res => console.log(res)).catch(err => console.error(err));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// << Coding challenge #3 >>

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const imgContainer = document.querySelector(".images");
const wait = function (second) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, second * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement("img");
    image.src = imgPath;

    image.addEventListener("load", function () {
      imgContainer.append(image);
      resolve(image);
    });
    image.addEventListener("error", function () {
      reject(new Error("Image not found!"));
    });
  });
};

// let currentImg;
// createImage("pic/img-1.jpg").then(img =>{
//   currentImg = img;
//   console.log( "Image 1 loaded");
//   return wait(2);
// }).then(() =>{
//   currentImg.style.display = "none";
//   return createImage("pic/img-2.jpg");
// }).then(img => {
//   currentImg = img;
//   console.log(`Image 2 loaded`);
//   return wait(2);
// }).then(() =>{
//   currentImg.style.display = "none";
// }).catch(err => console.error(err))

const loadNPause = async function () {
  try {
    // Create image 1
    let img = await createImage("pic/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";
    img = await createImage("pic/img-2.jpg");
    console.log(`Image 2 loaded`);
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};
loadNPause();
// some cheat looking and the rest is by my own

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};
loadAll(["pic/img-1.jpg", "pic/img-2.jpg", "pic/img-3.jpg"]);
