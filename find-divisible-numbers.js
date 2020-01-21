// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
//
// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

function divisibleBy(numbers, divisor){
 let divisibleNumbers = []

for(var i=0; i<=numbers.length; i++){
  if(numbers[i]%divisor == 0){
    divisibleNumbers.push(numbers[i])
  }
 }
 return divisibleNumbers
}
 // second code war
 // Get the number n (n>0) to return the reversed sequence from n to 1.
 //
 // Example : n=5 >> [5,4,3,2,1]

 const reverseSeq = n => {
let reverse = []
for (let i=1; i<=n; i++){
reverse.unshift(i)
}
  return reverse;
};
