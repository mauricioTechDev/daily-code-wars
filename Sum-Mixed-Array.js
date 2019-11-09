// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
// Return your answer as a number.


function sumMix(x){
let string = x.join("")
var numArray = string.split('').map(Number);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
var sum = numArray.reduce(reducer)
return sum
}
