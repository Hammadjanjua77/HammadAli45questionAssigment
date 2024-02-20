"use strict";
//Written by: Hammad Janjua Rajput
// date : 19-feb-2024
// current_users array
const current_users = ['Hammad Janjua Rajput', 'Hina Naseer', 'Imran Khan', 'Naveed Ahmed', 'Shahbaz Saleem'];
// new_users array
const new_users = ['Sami king', 'Hammad Janjua Rajput', 'Samad Zaib', 'Salman', 'Hina Naseer'];
// Loop through new_users list
for (let new_user of new_users) {
    // Convert new_user to lowercase for case insensitivity
    const lowercase_new_user = new_user.toLowerCase();
    // Checking username already exists in current_users or not
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        // Username already exists
        console.log(`The username '${new_user}' is not available. Please choose a different username.`);
    }
    else {
        // Username is available
        console.log(`The username '${new_user}' is available.`);
    }
}
