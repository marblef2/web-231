/*
============================================
; Title: marble-exercise-6.2.js
; Author: Professor Krasso
; Date:   26 November 2020
; Modified By: Fred Marble
; Description: This is an example of a try, catch, finally program.
;===========================================
*/

//Linking the header file.
const header = require('./marble-header.js');

//Displaying the well formatted header
console.log(header.display("Fred", "Marble", "Exercise 6.2"));

//Creating a blank line between header & exercise.
console.log("");

let numbers = [2, 4, 5]

try {
  var sum = numbers.forEach(function (x){
    return x/2;
  });
if (sum != 2) throw "Not The Number I want";

  console.log(sum);

} catch (err) {

  console.log("Catch clause: " + err);

} finally {

  console.log("Finally clause: End of this exercise...");

}
