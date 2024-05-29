// TASK 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toLowerCase() + magician.slice(1));
    }
}
var magicians = ["Senem", "Nazli", "Fatosh"];
show_magicians(magicians);
