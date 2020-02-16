// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.





var removeElement = function(nums, val) {
    // nums.sort((a,b) => a-b)
    // console.log(nums)
    // if(nums.length == 0){return 0}
    let index = 0;
    for(let j=0; j<nums.length; j++){
        if(nums[j] !== val){
            nums[index] = nums[j]
            // console.log(nums)
            index ++
        }
    }
    return index


};
