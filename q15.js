//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Name Array
var GuestArray = ["Tahooe", "Ghulam nabi", "Waqar"];
// Can not make dinner
var CannotAttend = "Tahooe";
// Invite a guest
var Newguest = "aleem";
GuestArray[GuestArray.indexOf(CannotAttend)] = Newguest;
// Send  message
//GuestArray.map((items)=> console.log(`Hellow,${items} you are invited to my dinner tonight`))
console.log("welcome all we found a bigger dinner table");
GuestArray.unshift("sajid");
var Middleguest = "Ali";
var middleindex = GuestArray.length / 2;
GuestArray.splice(middleindex, 0, Middleguest);
GuestArray.push("Hamza");
GuestArray.map(function (items) { return console.log("\nDear,".concat(items, " you are invited to dinner")); });
