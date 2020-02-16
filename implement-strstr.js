// Implement strStr().
//
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Example 1:
//
// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1





var strStr = function(haystack, needle) {
    // a couple corner case handling
	  let l1 = haystack.length; 
    let l2 = needle.length;
        if (l1 < l2) {
            return -1;
        } else if (l2 == 0) {
            return 0;
        }

        let threshold = l1 - l2;
    console.log(threshold+"sss")
        for (let i = 0; i <= threshold; i++) {
	    // use substring comparison instead of character comparison
            if (haystack.substring(i,i+l2) == needle) {
                console.log(i+"ttt")
                return i;
            }
        }
        return -1;

};
