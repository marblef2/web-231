/*
============================================
; Title: marble-exercise-6.3.js
; Author: Professor Krasso
; Date:  27 November 2020
; Modified By: Fred Marble
; Description: Ticketing System with Object Literals.
;===========================================
*/

//Linking the header file.
const header = require('./marble-header.js');

//Creating the ticketing literals.
const ticketing = {
  id: 8675309,

  name: "System Support",

  requestor: "Lucas Sellers"
}

//Displaying the well formatted header
console.log(header.display("Fred", "Marble", "Exercise 6.3"));

//Creating a blank line between header & exercise.
console.log("");

//Displaying the Ticketing information.
console.log("{id: " + ticketing.id + ", name: " + ticketing.name + ", Requestor: " + ticketing.requestor + "}");

//End of Program.
