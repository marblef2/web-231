/*
============================================
; Title:  marble-assignment-4.4-predicates.js
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:  13 November 2020
; Description: Filtering an array.
;===========================================
*/

//Links the Header file to the project.
const header = require('./marble-header.js');

//Creating the string array of 5 States.
let states = ["Alabama", "Iowa", "Nebraska", "California", "Nevada"];

//Selecting the State to Test against.
let state = "Iowa";


//Code for the getState Function.
function getState(localStates, val){
    for( x = 0; x < localStates.length; x++){
        if(localStates[x]== val){
            return true;
        }
        else{
            return false;
        }
    }
}
//Displays the Header.
console.log(header.display("Fred", "Marble", "Assignment 4.4"));

//Places a blank space between header & assignment results.
console.log("\n");

//Displays the original array of states.
console.log("  --  ORIGINAL ARRAY  --");
  for (r = 0; r < states.length; r++){
    console.log(states[r]);
  }

//Places a blank space between Original Array & Sorted Array.
console.log("\n");

//Sorting the States array.
let filteredStates = states.sort();

//Displays the sorted array of states.
console.log("  --  SORTED ARRAY  --");
for (y = 0; y < filteredStates.length; y++){
  console.log(filteredStates[y]);
}


//Places a blank space between Sorted Array & Selected item.
console.log("\n");

//Displays the Selected Value.
console.log("  --  SELECTED VALUE  --");
console.log(state);
