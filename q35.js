// TASK 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function makeshirt(size, text) {
    console.log("\n you order a ".concat(size, " T-shirt that says ").concat(text));
}
makeshirt("large", '"i love kittens".');
makeshirt("medium", '"faith over fear".');
