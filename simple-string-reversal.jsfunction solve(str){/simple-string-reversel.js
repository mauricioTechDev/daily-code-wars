In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space after the first three characters, hence "edo cruo"

solve("your code rocks") = "skco redo cruoy"
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!

function solve(str){
   //..
  let arr = str.split('')
  let reverseArr = str.split(' ').join('').split('').reverse() 
  for (let i = 0; i <= arr.length; i++){
    if (arr[i] === ' ') {
      reverseArr.splice(i, 0, ' ')
    }
  }
  
  return reverseArr.join('')
}
