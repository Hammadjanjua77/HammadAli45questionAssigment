"use strict";
//Written by: Hammad Janjua Rajput
//DATE: 19-feb-24
// Define Alien's color.
let alien_color = 'Olive Green';
//  Now Check Green color 
if (alien_color === 'Olive Green') {
    console.log("Player just earned 5 Points");
}
// Alien's color Change 
alien_color = 'yellow';
//This condition is not working Because Condition is False
if (alien_color === 'green') {
    console.log("Player just earned 5 points");
}
