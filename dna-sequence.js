All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.





var findRepeatedDnaSequences = function(s) {
let hashMap = new Map();
    let output = [];
    let i = 0;
    while(i+10 <= s.length){
        let subsequence = s.splice(i, i++ + 10);
        if(hashMap.has(subsequence)){
            hashMap.set(subsequence, hashMap.get(subsequence) + 1);
            if(hashMap.get(subsequence) === 2){
                output.push(subsequence);
            }
        }
        else {
            hashMap.set(subsequence, 1);
        }
    }
    return output;
};
// // // // // // // // // // 
// // // // // // // // // //
var findRepeatedDnaSequences = function(s) {
    let seen = new Set()
    let out = new Set()

    if (s.length > 10) {
        for (let i = 0; i <= s.length - 10; i++) {
            let com = s.substring(i, i+10)
            seen.has(com) ? out.add(com) : seen.add(com)
        }
    }
    return [...out]
};
