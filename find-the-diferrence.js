Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

Example:

Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.



var findTheDifference = function(s, t) {
    let sArray = s.split('').sort()
    let tArray = t.split('').sort()
    for(let i = 0; i< tArray.length; i++){
        if(tArray[i] !== sArray[i])return tArray[i]
    }

};
