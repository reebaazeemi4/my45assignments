//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["Honda Motorcycle", "Farari", "fortuner legender", "MG HS"];
console.log("i would like to own a " + " " + transportation[0]);
transportation.map(function (item) { return console.log("I would like to own a", item); });
