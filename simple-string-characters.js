In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.


function solve(s){
 //..
  let answer = [0,0,0,0]
  
  for(let i = 0; i < s.length; i++){
    if (/[A-Z]/.test(s[i])) {
      answer[0]++;
    } else if (/[a-z]/.test(s[i])) {
      answer[1]++;
    } else if (/[0-9]/.test(s[i])) {
      answer[2]++;
    } else {
      answer[3]++;
    }
  }
  
  return answer
}




//TEST CASES
describe("Basic tests", function(){
Test.assertDeepEquals(solve("Codewars@codewars123.com"),[1,18,3,2]);
Test.assertDeepEquals(solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
Test.assertDeepEquals(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);
Test.assertDeepEquals(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]);
Test.assertDeepEquals(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
Test.assertDeepEquals(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]);
});
