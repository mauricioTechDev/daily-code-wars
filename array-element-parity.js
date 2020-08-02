In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:
[1, -1, 2, -2, 3] => 3
3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4
-4 has no matching positive appearance
[1, -1, 2, -2, 3, 3] => 3
(the only-positive or only-negative integer may appear more than once)

Good luck!

function solve(arr){
  let map = {};
  
  for(let i = 0; i < arr.length; i++){
    let num = Math.abs(arr[i])
    if(map[num]){
      if(map[num].includes(arr[i])){
        return arr[i]
      } else {
       map[num].push(arr[i]) 
      }
    } else {
      map[num] = [arr[i]]
    }
  }
  
  for(key in map){
    if(map[key].length === 1){
      return map[key][0]
    }
  }
};
