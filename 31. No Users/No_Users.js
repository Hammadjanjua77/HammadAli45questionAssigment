"use strict";
//Written by: Hammad Janjua Rajpoot
// date : 19-feb-2024
// Array for usernames
let usernames = ['admin', 'Hina Naseer', 'Hammad Janjua Rajpoot', 'Imran Khan', 'Sonia'];
// Checking User Availiblity 
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Removimg all usernames from the array
    usernames = [];
    console.log("All usernames have been removed. " + usernames.length);
}
