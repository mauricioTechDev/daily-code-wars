In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
More examples can be found in the test cases.

Good luck!

function solve(arr){
    //..
  let map = {}
  for(let i = 0; i < arr.length-1; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] == arr[i]){
        arr.splice(i, 1)
        j = i
      }
    }
  }
  return arr
}
