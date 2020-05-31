Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.




var lengthOfLongestSubstring = function(s) {
    let hashMap = {}, start = 0, max = 0;
    for (let i=0;i<s.length;i++) {
        if (hashMap[s[i]]!=null) {
            if (hashMap[s[i]] + 1 > start) { // if the character is after start
                start = hashMap[s[i]] + 1; // update start position
            }
        }
        hashMap[s[i]] = i; // update char position
        max = (i-start+1)>max?(i-start+1):max; // update max if neccessary
    }
    return max;
};


// USING A SET
var lengthOfLongestSubstring = function(s) {
  // create set that exepts unique values
   let set = new Set()
   let longestSubstring = 0
   // outr two pointers
    let backRunner = 0;
    let forwardRunner = 0

    // Start out moving window
    while(backRunner < s.length && forwardRunner < s.length){
      // if set does not inlude number then add
        if( !set.has(s[forwardRunner]) ){
            set.add(s[forwardRunner])
            // in order to determine max we add 1 to the sutraction of two points becouse they are indexes and we want is length
            longestSubstring = Math.max(longestSubstring, forwardRunner - backRunner + 1)
            forwardRunner++
        } else {
            set.delete(s[backRunner])
            backRunner++
        }
    }
    return longestSubstring
};
