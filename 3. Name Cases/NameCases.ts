//Written by: Hammad Janjua Rajput
// Date : 17-feb-2024

//lower case
let personName:string = "Hammad Janjua Rajput (Full Stack Developer)";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("Uppercase: ",personName.toUpperCase());
//title casse
console.log("titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));
