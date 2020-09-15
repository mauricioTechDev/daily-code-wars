//In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

//solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
//--we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value
//More examples in test cases.

describe("Basic tests", function(){
Test.assertDeepEquals(solve([2,3,5,3,7,9,5,3,7]),[3,3,3,5,5,7,7,2,9])
Test.assertDeepEquals(solve([1,2,3,0,5,0,1,6,8,8,6,9,1]),[1,1,1,0,0,6,6,8,8,2,3,5,9])
Test.assertDeepEquals(solve([5,9,6,9,6,5,9,9,4,4]),[9,9,9,9,4,4,5,5,6,6])
Test.assertDeepEquals(solve([4,4,2,5,1,1,3,3,2,8]),[1,1,2,2,3,3,4,4,5,8])
Test.assertDeepEquals(solve([4,9,5,0,7,3,8,4,9,0]),[0,0,4,4,9,9,3,5,7,8])
});


function solve(arr){
  //..
  const freq = arr.reduce((r, e) => {
    if (!r[e]) r[e] = 1;
    else r[e]++;
    return r;
  }, {})

  return [...arr].sort((a, b) => {
    return freq[b] - freq[a] || a - b
  })
  
}
