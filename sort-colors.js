Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]



var sortColors = function(nums) {
    let min = 0
    let max = 3
    let i = min,
        j = 0,
        len = nums.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[nums[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            nums[j] = i;
            j++;
            count[i]--;
        }
    }
    return count

};
