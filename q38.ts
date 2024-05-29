// TASK 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function cityName(city:string , country:string): string {
    return `${city}, ${country}`;
}

let city1 = cityName("Istanbul","Turkey");
let city2 = cityName("Landon","Europe");
let city3 = cityName("Tokyo","Japan");

console.log(city1)
console.log(city2)
console.log(city3)