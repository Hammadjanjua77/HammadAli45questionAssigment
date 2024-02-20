"use strict";
//Written by: Hammad Janjua Rajput
//DATE: 18-feb-24
// Making Objects for Political parties
class politicalParties {
    constructor(Name, popularity, Performance) {
        this.chairman = Name;
        this.voters = popularity;
        this.Performance = Performance;
    }
}
// Mobile ke liye instances banya he.
const PTI = new politicalParties("Our Hero ( 'IMRAN KHAN ' )", "100 % ", " 100 %% ");
const PMLN = new politicalParties(" Nawaz Sharif", " 0 % %", " 10 %");
const PPP = new politicalParties("Bilawal bhutto", "0  %", " 5 %");
// Print information about the Mobile
console.log(PTI);
console.log(PMLN);
console.log(PPP);
