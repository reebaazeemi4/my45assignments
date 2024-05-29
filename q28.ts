// TASK 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_friuts : string[] = ["apple" , "strawberry" , "mangoes"]

if (favourite_friuts.includes("strawberry")) {
    console.log("strawberry")
}

if (favourite_friuts.includes("apple")) {
    console.log("apple")
}

if (favourite_friuts.includes("mangoes")) {
    console.log("mangoes")
}

if (favourite_friuts.includes("guava")) {
    console.log("you really like bananas")
}

if (favourite_friuts.includes("cheeku")) {
    console.log("you really like bananas")
}
