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


// << Our first AJAX call XMLHttpRequest >>

'use strict';
