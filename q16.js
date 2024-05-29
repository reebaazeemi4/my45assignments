//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Name Array
var GuestArray = ["Tahooe", "Ghulam nabi", "Waqar"];
// Can not make dinner
var CannotAttend = "Tahooe";
// Invite a guest
var Newguest = "aleem";
GuestArray[GuestArray.indexOf(CannotAttend)] = Newguest;
// Send  message
GuestArray.unshift("sajid");
var Middleguest = "Ali";
var middleindex = GuestArray.length / 2;
GuestArray.splice(middleindex, 0, Middleguest);
GuestArray.push("Hamza");
console.log(GuestArray);
console.log("we can invite only two people for dinner!");
while (GuestArray.length > 2) {
    var removeguest = GuestArray.pop();
    console.log("\nsorry ".concat(removeguest, " we cannot invite you to dinner!"));
}
;
GuestArray.map(function (item) { return console.log("\n".concat(item, "you are still invited to dinner!")); });
GuestArray.pop();
GuestArray.pop();
console.log(GuestArray);
