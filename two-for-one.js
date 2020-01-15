// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//
// For example:
//
// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  // your code here
  let array = []
  let min = Math.min(a,b)
  let max = Math.max(a,b)
  for(let i=min; i<=max; i++){
  array.push(i)
  }
  return array

}


// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i*2;
}
