//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Array
var guestArray = ["Aleem", "Waqar", "Ghulam Nabi"];
// Print message
guestArray.map(function (item) { return console.log("Hello,".concat(item, " you are invited tp dinner")); });
console.log(guestArray.length, "people are invited to dinner");
