/*
============================================
; Title:  marble-exercise-4.2-arrays.js
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:  11 November 2020
; Description: A one dimensional array for fruit.
;===========================================
*/

//Links the Header file to the project.
const header = require('./marble-header.js')

// Creating the Fruit Array.

const fruits = ["Apple", "Orange", "Banana", "Pear", "Mango"];

// Creation of the getFruits function, so we can display it.
function getFruits(arr){
  for (f=0; f< arr.length; f++){
    console.log(arr[f]);
  }
}

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

//Displays the Header.
console.log(header.display("Fred", "Marble", "Exercise 4.2"));

//Places a blank space between header & exercise results.
console.log("\n");

//Calling the getFruits Function to show the fruit in the array.
getFruits(fruits);
