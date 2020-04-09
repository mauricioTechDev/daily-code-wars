Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.



var intersect = function(nums1, nums2) {
    let longest= [];
    let shortest = [];
    let chosen = [];
	// which array is the longest
    if(nums1.length > nums2.length){
        longest = nums1
        shortest = nums2
    } else {
        longest = nums2
         shortest = nums1
    }

    while(shortest.length){
		// removes the first node from the shortest array
        let first = shortest.shift(),
		// checks if that node is in the other array
            isMatched = longest.indexOf(first);
			// if so
        if(isMatched != -1){
		// then remove it from that array
            longest.splice(isMatched,1);
			// push that value into the chosen array
            chosen.push(first)
        }
    }
	//booom
    return chosen;
};
