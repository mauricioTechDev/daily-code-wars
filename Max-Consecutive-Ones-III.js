Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

Return the length of the longest (contiguous) subarray that contains only 1s.



Example 1:

Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
Output: 6
Explanation:
[1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
Example 2:

Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
Output: 10
Explanation:
[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.


Note:

1 <= A.length <= 20000
0 <= K <= A.length
A[i] is 0 or 1





/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  // my count of the longest string
    let longest = 0;
    // my start sumarray index
    let start = 0;
    // the amount of zeros I have seen
    let zeroCount = 0

    for(let runner = 0; runner < A.length; runner++){
      // if a see a zerro increment the count
        if(A[runner] === 0){
            zeroCount++
        }
        // if my zero count has gone over then I want to check if the start of my sub array has a0
        // if so then I can decrease my zerocount and then move my starting index up one
        if(zeroCount > K){
            if(A[start] === 0){
                zeroCount--
            }
            start++
        }
        // compare my current longest with my subaaray that was made at the end of each for loop
        longest = Math.max(longest, runner - start + 1)
    }
    return longest

};
