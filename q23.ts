// TASK 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let name_1 : string = "hira"
let name_2 : string = "ria"
let name_3 : string = "sara"

if (name_1 == name_3){
    console.log("names are equal")
} else 
   {
    console.log("names are not equal")
}
if (name_1 != name_2){
    console.log("names are equal")
}

if (name_1 != name_3){
    console.log("names are equal")
}

let age_1 : number = 18
let age_2 : number = 21

if (age_1 == 18){
    console.log("elegible for vote");
}
    
if (age_1 != 22){
    console.log("elegible for vote in older category");
}

if (age_1 <= age_2){
    console.log("younger")
}

if (age_2 => age_1){
    console.log("older")
}

if (age_1 == 18 && age_2 != 22){
    console.log("person is eligible not for vote")
}
            
if (age_1 == 18 || age_2 != 22){
    console.log("person is eligible not for vote")
}

let country : string [] = ["pakistan","india","japan","china"]
 if (!country.includes ("pakistan")){
   console.log("pakistan is in country list")
 }

if (!country.includes ("america")){
    console.log("america is not include in an array")
}