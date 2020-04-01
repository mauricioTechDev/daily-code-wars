Write a function that accepts two arguments: an array/list of integers and another integer n.

Determine the number of times where two integers in the array have a difference of n.

For example:

intDiff([1, 1, 5, 6, 9, 16, 27], 4) // 3 ~ (1,5), (1,5), (5,9)
intDiff([1, 1, 3, 3], 2) // 4 ~ (1,3), (1,3), (1,3), (1,3)
Note: your code should not modify the input array.




const intDiff = (arr, n) => {
  // your code goes here
  let count = 0
  for(let i = 0; i < arr.length - 1 ; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i]>arr[j]){
        if(arr[i] - arr[j] == n){
          count++
        }
      } else{
        if(arr[j] - arr[i] == n){
          count++
        }
      }
    }
  }
  return count
}
