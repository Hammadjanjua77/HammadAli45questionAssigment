"use strict";
//lower case
let personName = "Hammad Janjua Rajput (Full Stack Developer)";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("Uppercase: ", personName.toUpperCase());
//title casse
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
