/*
============================================
; Title:  marble-exercise-3.2-functions.js
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   03 November 2020
; Description: Displays if there matches/ patterns with if else statements.
;===========================================
*/

//Links the Header file to the project.
const header = require('./marble-header.js')

//Variables to be used in the matching process.
const var1 ="Jeep"
const var2 = "SUV"
const var3 = "Three"
const var4 = "Three"
const var5 = "Cow"
const var6 = "Sheep"

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
console.log(header.display("Fred", "Marble", "Exercise 3.2"));

//Places a blank space between header & exercise results.
console.log("\n")

// Displays results for first test variables.
if (match(var1, var2)) {
  logMatch(var1, var2);
} else {
  logMismatch(var1, var2);
}

// Displays results for second test variables.
if (match(var3, var4)) {
  logMatch(var3, var4);
} else {
  logMismatch(var3, var4);
}

// Displays results for third test variables.
if (match(var5, var6)) {
  logMatch(var5, var6);
} else {
  logMismatch(var5, var6);
}

//End of JavaScript Code.
