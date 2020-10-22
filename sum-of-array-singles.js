//In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

//For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

//More examples in the test cases.

//Good luck!

describe("Basic tests", function(){
Test.assertEquals(repeats([4,5,7,5,4,8]),15);
Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);
});


function repeats(arr){
  let map = {}
  
  for(let i = 0; i < arr.length; i++){
    if(map[arr[i]]){
      map[arr[i]]++
    } else {
      map[arr[i]] = 1
    }
  }
  let sum = 0;
  
  for(key in map){
    if(map[key] === 1){
      sum+=(Number(key))
    }
  }
  
  return sum
};
