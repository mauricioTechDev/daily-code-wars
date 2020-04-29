Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']




function solution(str){
   //loop throught the string
   let ans = []

   for(let i = 0; i<str.length; i+=2){
     if(i == str.length - 1){
       if(i%2 == 0){
         ans.push(str.slice(i)+'_')
       } else {
         ans.push(str.slice(i))
       }
     } else {
       ans.push(str.slice(i, i+2))
     }
   }
   return ans
}


// With ternary operators

function solution(str){
   //loop throught the string
   let ans = []
   for(let i = 0; i<str.length; i+=2){
     i == str.length - 1 ? i%2 == 0 ? ans.push(str.slice(i)+'_') : ans.push(str.slice(i)) : ans.push(str.slice(i, i+2))
   }
   return ans
}

TIME COMPLECITY: O(n)
SPACE COMPLEXITY: O(n)
