Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false



function solution(str, ending){
//     console.log(str, ending)
  if(str.length < ending.length) return false

  let point1 = ending.length -1
  let point2 = str.length - 1
//   loop backwards on both strings
  while(point1 > 0 && point2 > 0){
//   if the letter at the index is equall then decrease pointers
   if(ending[point1] === str[point2]){
     point1--
     point2--
   }
//    if letters at index are not eual return false
   if(ending[point1] !== str[point2]){
     return false
   }
  }
//   if the loop finished then all is good and return true
   return true
}
