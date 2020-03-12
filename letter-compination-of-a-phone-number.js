Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.




var letterCombinations = function(digits) {
    let map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    let out = comb(map, digits, [], "", digits.length);
    return out;

};


function comb(map, dig, out=[], curr="", len){
    if(curr.length===len){
        out.push(curr);
        return [];
    }
    else{
        for(let i = 0; i<dig.length; i++){
            let ch = dig[i];
            let str = map[ch];
            let newDig = dig.slice(i+1);
            for(let j = 0; j<str.length; j++){
                comb(map, newDig, out, curr + str[j], len);
            }

        }
    }
    return out;
}
