//Written by: Hammad Janjua Rajput
// Date : 19-feb-2024

// array for usernames
const usernames: string[] = ['admin', 'Hina Naseer', 'Hammad Janjua Rajpoot', 'Imran Khan', 'Sonia'];

// using forEach method
usernames.forEach(username => {
  // Step 3: Inside the loop, special greeting for 'admin', For Others Printing a Simple Greeting
  if (username.toLowerCase() === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});

