/*
============================================
; Title:  marble-exercise-4.3-filtering.js
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:  11 November 2020
; Description: Filtering an array.
;===========================================
*/

//Links the Header file to the project.
const header = require('./marble-header.js')

//Building the Vehicle Array.
const vehicles =["Car","Truck", "Motorcycle", "Airplane", "Bus"];

//Creating the getValue function.
function getValue(arr, val){
  for(f = 0; f< arr.length; f++){
    if(arr[f] == val){
      console.log(arr[f]);
    }
  }
}
/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/


//Displays the Header.
console.log(header.display("Fred", "Marble", "Exercise 4.3"));

//Places a blank space between header & exercise results.
console.log("\n");

//Displays the array of vehicles.
console.log("  --  DISPLAYING THE ARRAY ITEMS  --");
  for (r = 0; r < vehicles.length; r++){
    console.log(vehicles[r]);
  }

//Displays a break between the array display and the first selected item.
console.log("");

//Displays Selected Item title.
console.log("  --  SELECTED ITEM  --");

//Displays a selected Value
getValue(vehicles, "Motorcycle");

//Displays a break between the first and second selected item.
console.log("");

//Displays Selected Item title.
console.log("  --  SELECTED ITEM  --");

//Displays a selected Value
getValue(vehicles, "Bus");

//End of JavaScript Program.
