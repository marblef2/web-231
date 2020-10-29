/*
============================================
; Title:  marble-exercise-2.3.js
; Author: Professor Krasso
; Date:   29 October 2020
; Modified By: Fred Marble
; Description: Linking the header file, and creating a function with
; paramaters on the outside of the function.
;===========================================
*/
/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

//Link of the Header Creation File.
const header = require('./marble-header.js')

//Creating properties for the function
myName.fred ="Fred";
myName.marble="Marble";

//Creating the Function
function myName(){
  return "Hello " + myName.fred + " " + myName.marble + "!";
}

// Outputs from the header and the myName function.
console.log(header.display("Fred", "Marble", "Exercise 2.3"))
console.log("\n")
console.log(myName())
