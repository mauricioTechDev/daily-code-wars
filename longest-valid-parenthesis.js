Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"





var longestValidParentheses = function(s) {
    var start = 0;
    var max = 0;
    var stack = [];

    for(var i = 0; i < s.length; i++) {
        if (s[i] === '('){
            stack.push(i);
            continue;
        } else {
            if (stack.length==0){
                start = i+1;
                continue;
            } else {
                stack.pop();
                if (stack.length===0){
                    max = Math.max(max, i-start+1);
                } else {
                    max = Math.max(max, i-stack[stack.length-1]);
                }
            }
        }
    }
    return max;
}
