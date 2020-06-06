In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc"
--The first string has 'yb' which is not in the second string.
--The second string has 'zc' which is not in the first string.
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

Please also try Simple remove duplicates



function solve(a,b){
let aArr = a.split('')
let bArr = b.split('')
let answer = ''
for(let i = 0; i < aArr.length; i++){
  if(!bArr.includes(aArr[i])){
    answer += aArr[i]
  }
}
for(let j = 0; j < bArr.length; j++){
  if(!aArr.includes(bArr[j])){
    answer += bArr[j]
  }
}
return answer
};
// time complexity O(a + b)
