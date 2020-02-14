// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.
//
// Notes
// Array/list size is at least 3 .
//
// Array/list's numbers Will be mixture of positives , negatives and zeros
//
// Repetition of numbers in the array/list could occur.
//
// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
// maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 2 whose gives product of maxima is 8 * 9 * 10 = 720 .
//


function maxProduct(numbers, size){
  //your code here
  let arr = []
  while(arr.length<size){
  let maxNum = Math.max(...numbers)
  let indexOfMaxNum = numbers.indexOf(maxNum)
      arr.push(Math.max(...numbers))
      numbers.splice(indexOfMaxNum,1)
      console.log(arr)
  }
  let count = 1
  for(let i=0; i<arr.length; i++){
    count = count * arr[i]
  }
  return count
}
