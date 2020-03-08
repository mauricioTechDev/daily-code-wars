Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"






var longestPalindrome = function(s) {
  var start = 0;
  var end = 0;
  var len = s.length;
  var num = 0;
  for (var i = 0; i < len; i++) {
    num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
    if (num > end - start) {
      start = i - Math.floor((num - 1) / 2);
      end = i + Math.floor(num / 2);
    }
  }
  return s.slice(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
  var l = left;
  var r = right;
  var len = s.length;
  while (l >= 0 && r < len && s[l] === s[r]) {
    l--;
    r++;
  }
  return r - l - 1;
};
// Time complexity : O(n^2).
// Space complexity : O(1).
var longestPalindrome = function(s) {
  var start = 0;
  var end = 0;
  var len = s.length;
  for (var i = 0; i < len; i++) {
      let len1 = expandAroundCenter(s, i, i);
      let len2 = expandAroundCenter(s, i, i+1);
      let maxLength = Math.max(len1, len2)
    if (maxLength > end - start) {
      start = i - Math.floor((maxLength - 1) / 2);
      end = i + Math.floor(maxLength / 2);
    }
  }
  return s.slice(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
  var l = left;
  var r = right;
  var len = s.length;
  while (l >= 0 && r < len && s[l] === s[r]) {
    l--;
    r++;
  }
  return r - l - 1;
};
'aabbaa'
console.log(longestPalindrome(s))
