//Written by: Hammad Janjua Rajput
//DATE: 16-2-24

// part 3 

//  Using object mapping
alienColor = "red"; // alienColor ka variable V1 file me Declared he.

const pointMap: {[key: string]: number} = {
    "green": 5,
    "yellow": 10,
    "red": 15
};

const points: number | undefined = pointMap[alienColor];

if (points !== undefined) {
    console.log(`The player earned ${points} points.`);
} else {
    console.log("Unknown alien color."); // If not Filled than it was working
}
