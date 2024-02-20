"use strict";
//Written by: Hammad Janjua Rajput
// Array Of variable  magicians
const magicians = ["Hammad Janjua Rajput", "Hina Naseer", "Imran Khan", "Ahmed khan"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
make_great(magicians);
show_magicians(magicians);
