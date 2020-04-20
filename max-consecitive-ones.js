Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000



var findMaxConsecutiveOnes = function(nums) {
   let max = 0
   let current = 0

   for(index of nums){
       if(index === 1){
           current++
       } else {
           if(current > max){
               max = current;
           }
           if(max >= nums.length){
               return max
           }
           current = 0
       }
   }
    return Math.max(max,current)
};
