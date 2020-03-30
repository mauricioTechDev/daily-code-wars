Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.


Example 1:

Input: "USA"
Output: True


Example 2:

Input: "FlaG"
Output: False





var detectCapitalUse = function(word) {
    if(word === word.toUpperCase()){
      return true
    } else if (word === word.toLowerCase()) {
        return true
    }  else if(word[0] === word[0]){
        for(let i = 1; i< word.length; i++){
                if(word[i] === word[i].toUpperCase()){
                    return false
                }

            }
        return true
    }
};
