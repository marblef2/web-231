/*
============================================
; Title:  marble-assignment-3.4.js
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   07 November 2020
; Description: Displays if there matches/ patterns with a for loop and an if else statements.
;===========================================
*/

//Links the Header file to the project.
const header = require('./marble-header.js')

//Static Variable for the Match Function.
var solid = 5;

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

//Function Match to see if the variables match.
function match(arg1, arg2){
  if (arg1 == arg2) {
    return true;
  } else {
    return false;
  }
}

//Function logMismatch this is so that if the variables do not match it shows them as not matching.
function logMismatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do not match!")
}

//Function logMatch this is so that if the variables do match it shows them as matching.
function logMatch(arg1,arg2){
  console.log(arg1 + " and " + arg2 + " do match!")
}

//Displays the Header.
console.log(header.display("Fred", "Marble", "Assignment 3.4"));

//Places a blank space between header & exercise results.
console.log("\n")

// Do the numbers match game string.
console.log("  -- DO THE NUMBERS MATCH GAME --   ");

// For Loop to not have 10 if/else statements.
for (var x =1; x <=10; x++, solid){
  var changing = randomNumber();

  if (match(solid, changing)){
    logMatch(solid, changing);
} else {
  logMismatch(solid, changing);
}
  }


  // End of JavaScript Program.
