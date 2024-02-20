//Written by: Hammad Janjua Rajput
//DATE: 16-2-24
// part 3 
//  Using object mapping
alienColor = "red"; // alienColor ka variable V1 file me Declared he.
var pointMap = {
    "green": 5,
    "yellow": 10,
    "red": 15
};
var points = pointMap[alienColor];
if (points !== undefined) {
    console.log("The player earned ".concat(points, " points."));
}
else {
    console.log("Unknown alien color."); // If not Filled than it was working
}
