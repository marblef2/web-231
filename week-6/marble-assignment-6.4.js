/*
============================================
; Title: marble-assignment-6.4.js
; Author: Professor Krasso
; Date:  27 November 2020
; Modified By: Fred Marble
; Description: Ticketing System with Nested Object Literals.
;===========================================
*/

//Creating the ticketing literals.
const ticketing = {
  id: 404,
  name: "Jeremy Hudson",
  date: new Date().toLocaleDateString('en-US'),
  priority: 4,

  person: {
    id: 417990,
    firstName: "Brian",
    lastName: "Sherlock",
    jobTitle: "System Support Analyst"
  }
}

//Linking the header file.
const header = require('./marble-header.js');

//Displaying the well formatted header
console.log(header.display("Fred", "Marble", "Assignment 6.4"));

//Creating a blank line between header & assignment.
console.log("");

//Displaying the Assignment Requirements.
console.log("Ticket " + ticketing.id + " was created on " + ticketing.date + " and assigned to "
  + ticketing.person.firstName + " " + ticketing.person.lastName + " (" + ticketing.person.jobTitle + ").");
