/*
============================================
; Title:  control-statements-if-else.js
; Author: Professor Krasso
; Modified by: Fred Marble
; Date:   25 June 2017
; Description: Using Switches to not have logical issues with If/Else Statements.
;===========================================
*/

//Linking Header File.
const header = require('./marble-header.js')

// variable construction
var answer = 42;


//Displays the Header.
console.log(header.display("Fred", "Marble", "Exercise 3.3"))

//Creates a space between the header and the exercise.
console.log("\n");

// Switch instead of if/else statements.
switch (answer){
    case 24:
      console.log("This is not the number of the Universe!");
      break;
    case 32:
      console.log("This is close to the number of the Universe!");
      break;
    case 42:
      console.log("This is the number of the Universe!");
      break;
    case 72:
      console.log("Not even close to the number of the Universe!");
      break;
    case 98:
      console.log("I guess you don't know the number of the Universe!?");
      break;
    default:
      console.log("Are you even trying?");
      break;
}



