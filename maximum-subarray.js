Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


// time  O(n^2) space O(n^2) brute force solution
var maxSubArray = function(nums) {
  let sum = num[0]

  for(let i = 0; i<nums.length; i++){
      for(let j = i; j<nums.length; j++){
          let currentSum = nums.sclice(i, j+1).reduce((acc,curr) => acc, curr, 0)
          if(currentSum > sum){
                  sum = currentSum
          }
      }
  }
}






// time  O(n), space O(1)
// Refactored solution using Kadanes algorithm using dynamic programing
// In linear time and constant space
var maxSubArray = function(nums) {
  let maxSoFar = nums[0];
   let maxEndingHere = nums[0];


   for (let i = 1; i < nums.length; i++) {
     maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);

     // Did we beat the 'maxSoFar' with the 'maxEndingHere'?
     maxSoFar = Math.max(maxSoFar, maxEndingHere);
   }

   return maxSoFar;



};
