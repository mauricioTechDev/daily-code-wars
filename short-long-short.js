Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

For example:
solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"


//SOLUTION
function solution(a, b){
  let aLength = a.length;
  let bLength = b.length;
  
  return aLength > bLength ? b+a+b : a+b+a;
}
