// TASK 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great2(magicians) {
    var greatmagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + 'the great');
    }
    return greatmagicians;
}
var magicians3 = ["Fariha", "Saria", "Neha"];
var greatmagicians2 = make_great2(magicians3);
make_great2(magicians3);
make_great2(greatmagicians2);
