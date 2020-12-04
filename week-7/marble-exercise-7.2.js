/*
============================================
; Title: marble-exercise-7.2js
; Author: Professor Krasso
; Date:  04 December 2020
; Modified By: Fred Marble
; Description: Employee Constructor and Display.
;===========================================
*/

//Linking the header file.
const header = require('./marble-header.js');

//Creating the Employee Constructor Function.
function employeeConstructor(id, firstName, lastName, title){
  this.id = id;

  this.firstName = firstName;

  this.lastName = lastName;

  this.title = title;
}
// Constructing the Employees.
let employee = [

  new employeeConstructor(1, "Thomas", "Edison", "Software Engineer"),

  new employeeConstructor(2, "Benjamin", "Franklin", "Programmer"),

  new employeeConstructor(3, "Nikola", "Tesla", "Project Manager"),

  new employeeConstructor(4, "Charles", "Babbage", "Product Manager"),

  new employeeConstructor(5, "Alexander", "Bell", "Business Analyst")
]

//Displaying the well formatted header
console.log(header.display("Fred", "Marble", "Exercise 7.2"));

//Creating a blank line between header & exercise.
console.log("");

//Displaying the Employees.
for (let x = 0; x < employee.length; x++) {
  console.log(employee[x].id + '. ' + employee[x].firstName + " " + employee[x].lastName + " " + employee[x].title);
}
