Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?




var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
        let map = { }
        for(let i = 0; i< s.length; i++){
            if(map[s[i]]){
                map[s[i]]++
            }
            if(!map[s[i]]){
                map[s[i]] =  1
            }
        }
        for(let j = 0; j< t.length; j++){
            if(!map[t[j]]) return false
            map[t[j]]--
            if(map[t[j]] < 0) return false
        }
        return true
};
