Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

Test.assertEquals(consecutive([4,8,6]),2);
Test.assertEquals(consecutive([1,2,3,4]),0);
Test.assertEquals(consecutive([]),0);
Test.assertEquals(consecutive([1]),0);

function consecutive(arr) {
  let num = 0;
  let sorted = arr.sort((a, b) => a - b)
  
  for(let i = 0; i < sorted.length - 1; i++){
    if(sorted[i] + 1 !== sorted[i+1]){
       num+= sorted[i+1] - sorted[i] - 1
    }
  }
  
  return num
}
