// TASK 32
var current_users = ["admin", "eric", "rehan", "senem", "naina"];
var new_users = ["admin", "Nazli", "Erha", "Saisha", "asuman"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will you need to enter a new username?."));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
