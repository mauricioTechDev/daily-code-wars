Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.



var isSubsequence = function(s, t) {
    if(t.length < s.length) return false
    if(s.length == 0) return true
    let length = t.length
    let count1 = 0
    let count2 = 0
    let match = ''
    while (count2 < length){
        if(s[count1] == t[count2]){
            match +=t[count2]
            count1++
            count2++
        }
        if(s[count1] !== t[count2]){
            count2++
        }
        if(s==match) return true
    }
    return false
};
