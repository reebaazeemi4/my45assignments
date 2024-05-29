// TASK 32


let current_users : string [] = ["admin", "eric", "rehan", "senem","naina"];
let new_users : string []= ["admin", "Nazli", "Erha", "Saisha", "asuman"];

new_users.forEach((newUser) => {
    if (
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ) {
        console.log(`${newUser} will you need to enter a new username?.`);
    } else {
        console.log(`${newUser} is available`);
    }
});