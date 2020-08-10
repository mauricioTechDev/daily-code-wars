You are given two strings s and t. Both strings have length n and consist of lowercase Latin letters.

You can successively perform the following move any number of times (possibly, zero):

swap any two adjacent (neighboring) characters of s (i.e. for any i={0,1,2,…,n−2} you can swap si and si+1).
Input:
Strings s and t, which consisting of n(1 ≤ n ≤ 1000) lowercase Latin letters.

Output:
The minimum number of moves to transform s to t. If it is impossible to obtain the string t using moves, return -1.

Examples:

('abcdef', 'abdfec') => 4
('abcd', 'accd') => -1
('ab', 'ab') => 0
('ab', 'ba') => 1
('aaa', 'aaa') => 0
Note:
In the first example the string s changes as follows: "abcdef" → "abdcef" → "abdcfe" → "abdfce" → "abdfec".

function obtain(s, t) {

    let count = 0

  for (let i = 0; i < s.length; i++) {
    let k = t.indexOf(s[i]) // value of t at index of item in s
    
    if (k === -1) return -1
    
//     remove the part where they are equal 
    t = t.slice(0, k) + t.slice(k + 1)
//     add to count the index of the difference between s and t
    count+=k
  }
  return count
}
