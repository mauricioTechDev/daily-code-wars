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
