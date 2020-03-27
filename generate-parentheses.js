Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]





var generateParenthesis = function(n) {
   const ourList = []

   generateStrings(ourList, '', 0, 0, n)

    return ourList

};

var generateStrings = (ourList, curentList, open, close, n) => {
    if(curentList.length === n * 2){
        ourList.push(curentList);
        return;
    }
    if(open < n){
        generateStrings(ourList, curentList + '(', open + 1, close, n)
    }
    if(close < open){
        generateStrings(ourList, curentList + ')', open, close + 1, n)
    }
}
