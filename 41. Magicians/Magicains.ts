//Written by: Hammad Janjua Rajput
// date : 19-feb-2024

// Array of variable  magicians
const magicians: string[] = ["Hammad Janjua Rajput", "Hina Naseer", "Imran Khan", "Ahmed khan"];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);
