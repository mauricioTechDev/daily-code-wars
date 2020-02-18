// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//
// Example:
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:
//
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
//
//



var maxSubArray = function(nums) {

  // time  O(n^2)
// let leftIndex = 0
// let rightIndex =nums.length - 1
// var max_so_far = Number.NEGATIVE_INFINITY;

// for(let i = 0; i<nums.length; i++){
//      maxSum = 0
//     for(let j = i; j<nums.length; j++){
//         maxSum += nums[j]
//         if(max_so_far<maxSum){
//                 leftIndex = i;
// 				max_so_far = maxSum;
// 				rightIndex = j;
//         }
//     }
// }
//     return {
// 		left: leftIndex,
// 		right: rightIndex,
// 		final_max_sum_subArray: max_so_far
// 	};



// time  O(n), space O(1)
    var curr_max = Number.NEGATIVE_INFINITY, max_so_far = Number.NEGATIVE_INFINITY;

  for(var i = 0; i < nums.length; i++){
    curr_max = Math.max(nums[i], curr_max + nums[i]);
    max_so_far = Math.max(curr_max, max_so_far);
  }
  return max_so_far;
///////////////////////////////////////////////
Refactored solution using Kadanes algorithm
In linear time and constant space

  let maxSoFar = nums[0];
   let maxEndingHere = nums[0];


   for (let i = 1; i < nums.length; i++) {
     maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);

     // Did we beat the 'maxSoFar' with the 'maxEndingHere'?
     maxSoFar = Math.max(maxSoFar, maxEndingHere);
   }

   return maxSoFar;



};
