Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.


var frequencySort = function(s) {
    let map = {}

    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
            map[s[i]].push((s[i]))
        } else {
            map[s[i]] = [s[i]]
        }
    }
    let arr = []
    for(const set in map){
        arr.push(map[set].join(''))
    }
    return arr.sort((a,b) => b.length - a.length).join('')
};
