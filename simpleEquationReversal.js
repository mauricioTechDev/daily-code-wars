//Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"
//More examples in test cases.
describe("Basic tests", function(){
Test.assertEquals(solve("100*b/y"),"y/b*100");
Test.assertEquals(solve("a+b-c/d*30"),"30*d/c-b+a");
Test.assertEquals(solve("a*b/c+50"),"50+c/b*a");
});

function solve(eq){
  let arr = eq.split('')
  let num = ''
  let length = arr.length
  
  for(let i = 0; i < length; i++){
    if(!!Number(arr[i]) || arr[i] === '0'){
      num+=arr[i]
    } else {
      num+= ` ${arr[i]} `
    }
  }
  
  return num.split(' ').reverse().join('')
}
