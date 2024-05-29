// TASK 21

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
    name:string
    Price:number
}
// create two objects

const book: item = {
     name: 'PRISONER OF ZENDA',
     Price:450
}
const friut: item = {
     name: 'mango',
     Price:200
}     
console.log(`book name: ${book.name}, price: ${book.Price}`);
console.log(`friut name: ${book.name}, price: ${friut.Price}`);
