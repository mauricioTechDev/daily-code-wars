Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.


function findOdd(A) {
  //happy coding!
  let map = {}

  for(let i = 0; i < A.length; i++){
    if(map[A[i]]){
      map[A[i]].push(A[i])
    } else {
      map[A[i]] = [A[i]]
    }
  }
  let longest = ''
  for(num in map){
    if(map[num].length%2 !== 0){
      longest = num
    }
  }

  return Number(longest)
}
