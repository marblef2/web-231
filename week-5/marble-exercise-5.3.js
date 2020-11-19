/*
============================================
; Title: marble-exercise-5.3.js
; Author: Professor Krasso
; Date:   19 November 2020
; Modified By: Fred Marble
; Description: Displays an array with my favorite composers.
;===========================================
*/

//Linking the header file.
const header = require('./marble-header.js');

let composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 5
  },
  {
    firstName: "Steven",
    lastName: "Nelson",
    genre: "Modern",
    rating: 8
  },
  {
    firstName: "Adele",
    lastName: "Adkins",
    genre: "Soul",
    rating: 7
  },
  {
    firstName: "Fryderyk",
    lastName: "Chopin",
    genre: "Classical",
    rating: 4
  },
  {
    firstName: "Antonio",
    lastName: "Vivaldi",
    genre: "Classical",
    rating: 9
  }
];

//Displays the Header.
console.log(header.display("Fred", "Marble", "Exercise 5.3"));

//Adding a blank space between the header and exercise content.
console.log("");

//Displaying the Composers Array.
composers.forEach(function(composer){
  console.log("Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating)
}
);
