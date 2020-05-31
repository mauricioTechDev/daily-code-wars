Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.



Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
Example 2:

Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".
Example 3:

Input: s = "abc"
Output: 1


Constraints:

3 <= s.length <= 5 x 10^4
s only consists of a, b or c characters.




/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0;
    let curr = {a: 0, b: 0, c: 0};

    let low = 0;
    let high = -1;

    while (high < s.length) {
        if (curr.a === 0 || curr.b === 0 || curr.c === 0) {
            high += 1;
            curr[s[high]] += 1;
        } else {
            console.log('high', high)
            count += s.length - high;
            curr[s[low]] -= 1;
            low += 1;
        }
        // console.log(curr)
    }

    return count;
};
