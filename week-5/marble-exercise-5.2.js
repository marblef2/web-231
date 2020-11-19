/*
============================================
; Title: marble-exercise-5.2.js
; Author: Professor Krasso
; Date:   18 November 2020
; Modified By: Fred Marble
; Description: Displays an array of my favorite foods.
;===========================================
*/

//Linking the header file.
const header = require('./marble-header.js');

//Creating the Array with my favorite foods.
let foods = ["Pizza", "Steak", "Mashed Potato", "Meatloaf", "Porkchops"];

//Displays the Header.
console.log(header.display("Fred", "Marble", "Exercise 5.2"));

//Adding a blank space between the header and exercise content.
console.log("");

//Using the forEach() function to go over the array.
foods.forEach(function (food){
  console.log(food);
});
