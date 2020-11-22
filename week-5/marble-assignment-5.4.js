/*
============================================
; Title: marble-assignment-5.4.js
; Author: Professor Krasso
; Date:   21 November 2020
; Modified By: Fred Marble
; Description: Displays an array with my favorite composers grouped by rating and then by genre.
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

//Mapping the composers by rating.
var ratingsMap = composers.map(function (rate){
  return rate
});

//Mapping the composers by genre.
var genreMap = composers.map(function (index){
  return index
});
//Displays the Header.
console.log(header.display("Fred", "Marble", "Assignment 5.4"));

//Adding a blank space between the header and exercise content.
console.log("");

//Adding the composer by rating display.
console.log("--  COMPOSER BY RATING ---");
ratingsMap.forEach(function (index){
  console.log("Rating: " + index.rating + "\n" + "Composer: " + index.lastName)
});

//Adding a blank space between the composer by Rating & Composer by Genre.
console.log("");

//Adding the composer by rating display.
console.log("--  COMPOSER BY Genre ---");
genreMap.forEach(function (index){
  console.log("Genre: " + index.genre + "\n" + "Composer: " + index.lastName)
});
