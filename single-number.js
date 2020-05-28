Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4


var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0]
    let numsLength = nums.length

    let memory = []
    for(let i = 0; i < numsLength; i++){
        !memory.includes(nums[i]) ?
        memory.push(nums[i])
        : memory.splice(memory.indexOf(nums[i]), 1)
    }
    return memory[0]
};
