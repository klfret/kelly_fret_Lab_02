//alert("JavaScript works! Lab 2");


// *************
// Kelly L. Fret
// SDI 1409
// Lab 2
// *************


// Start of code

// My variable declarations
var myBikeRideStartPoint = "County Lake's Gate";				//String data type
var myBikeRideEndPoint   = "County Lake's \"Picnic Area\"";		//String data type with Escape Sequence
var totalMilesOfRide     = "10";								//Number data type
var sunnyDay             = false;								//Boolean data type


// My confirm
sunnyDay = confirm("Was it a sunny day during the bike ride? \nClick OK for Yes, Cancel for No.");


// My Prompt
totalMilesOfRide = parseFloat(prompt("How many miles did you bike ride?"));


// My Outputs
console.log("I went on a " + totalMilesOfRide + "-mile bike ride with other riders.");
console.log("Our starting point was at the " + myBikeRideStartPoint + ".");
console.log("And our ending point was at the " + myBikeRideEndPoint + ".");
console.log("It's " + sunnyDay + " that it was a sunny day during the bike ride. ");


// To confirm the parseFloat is working
totalMilesOfRide = totalMilesOfRide + 10;
console.log(totalMilesOfRide);
// End of code


