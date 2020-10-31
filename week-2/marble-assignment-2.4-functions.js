/*
============================================
; Title:  marble-assignment-2.4-functions.js
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   31 October 2020
; Description: Displays the sum of two integer values
;===========================================
*/


//Links the Header file to the project.
const header = require('./marble-header.js')

// Creating Function Property Definitions for Full Name
fullName.firstName = "Fred"
fullName.lastName = "Marble"

// Creating variables for Date Writer.
const day = "31"
const month = "October"
const year = "2020"

// Creating Parameters for the Format Number Function.
const number = "12"
const numOfFixedPositions = "36"

// Creating the String to be parsed to int.
const funNum = "8675309.00"

// Creating the string to be parsed to float.
const funNum2 = "267309.002"

/**
 * Params: none
 * Response: Full Name
 * Description: returns the Full name as a string.
 */
function fullName() {
  return fullName.firstName + " " + fullName.lastName
}

/**
 * Params: Day, Month, Year
 * Response: Gives a new date with passed in values.
 * Description: Creates the date and returns it as a string.
 */
function dateWriter(day, month, year){
  let output = "\n" + day + " " + month + " " + year

  return output
}

/**
 * Params: number, numOfFixedPositions
 * Response: Gives a number with the fixed positions with the passed in values.
 * Description: Returns the number with fixed positions.
 */
function formatNumber(number, numOfFixedPositions){
  return "\n" + "The number " + number + " has this many positions " + numOfFixedPositions
}

/**
 * Params: funNum
 * Response: Gives the function a string and parses to int.
 * Description: Returns the funNum as a int.
 */
function convertToInt(funNum){
  return parseInt(funNum)
}

/**
 * Params: funNum2
 * Response: Gives the function a string and parses to float.
 * Description: Returns the funNum2 as a float.
 */
function convertToFloat(funNum2){
  return parseFloat(funNum2)
}
//Displays the Header.
console.log(header.display("Fred", "Marble", "Assignment 2.4"));
//Creating a blank space between the header and the Full Name Function.
console.log("\n");
//Output of the Full Name Function.
console.log(fullName());
// Output of the Date Writer Function.
console.log(dateWriter(day, month, year));
// Output of the Format Number Function.
console.log(formatNumber(number, numOfFixedPositions));
//Creating a blank space between the Format Number and Convert to Int function.
console.log("\n");
// Display of the Convert To Int Function.
console.log(convertToInt(funNum));
//Creating a blank space between the Convert to Int function and the Convert to Float function.
console.log("\n");
//Display of the Convert to Float function.
console.log(convertToFloat(funNum2));
