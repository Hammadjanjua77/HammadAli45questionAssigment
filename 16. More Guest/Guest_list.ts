//Written by: Hammad Janjua Rajput
// Date : 18-feb-2024


let  Guest_list :string[] = ['Imran Khan','Babar Azam','Iqrar Ul Hassan'];

//for(let i=0; i<Guest_list.length; i++){

   // console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is out pleasure to invite you in our party.\n\nThank You!\n\n');
//}

let absent_Guest :string = 'Imran Khan';

let new_Guest :string = 'Feroz Kham';

Guest_list[0] = new_Guest;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is out pleasure to invite you in our party.\n\nThank You!\n\n');
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)


console.log('Good News! we find Big Table so we are inviting 3 more guests.');

Guest_list.unshift('Sami King');
Guest_list.splice(2 , 0 , 'Hina Naseer');
Guest_list.push('Hammad Janjua rajput');

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is out pleasure to invite you in our party.\n\nThank You!\n\n');
 }
 

