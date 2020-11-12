//Task
//Given an array/list [] of integers , Find the Nth smallest element in this array of integers

//Notes
//Array/list size is at least 3 .

//Array/list's numbers could be a mixture of positives , negatives and zeros.

//Repetition in array/list's numbers could occur , so don't Remove Duplications.


function nthSmallest(arr, pos){
  return arr.sort((a, b) => a - b)[pos - 1]
}
