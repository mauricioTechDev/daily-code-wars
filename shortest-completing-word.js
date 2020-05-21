Find the minimum length word from a given dictionary words, which has all the letters from the string licensePlate. Such a word is said to complete the given string licensePlate

Here, for letters we ignore case. For example, "P" on the licensePlate still matches "p" on the word.

It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.

The license plate might have the same letter occurring multiple times. For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.
EX 1
Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
Output: "steps"
Explanation: The smallest length word that contains the letters "S", "P", "S", and "T".
Note that the answer is not "step", because the letter "s" must occur in the word twice.
Also note that we ignored case for the purposes of comparing whether a letter exists in the word.
EX 2
Input: licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
Output: "pest"
Explanation: There are 3 smallest length words that contains the letters "s".
We return the one that occurred first.



var shortestCompletingWord = function(licensePlate, words) {

     const alpha = /^[a-z]*$/
   // Initialize hash map
    const hash = {}
    for (let char of licensePlate) {
        let character = char.toLowerCase()
		// We store every alphabet character of the licensePlate in lower case only in a hash map
		// If the character exist in the hash we increment it's value. If not we store it's default as 1
        if (alpha.test(character)){
            if(hash[character]){
                hash[character] += 1
            } else {
                hash[character] = 1
            }
        }
    }
	// We set the maximum to ammount of letter in the licensePlate
    let max = 0
    for (let key in hash) {
        max += hash[key]
    }
    let shortestCompletingWord
    let replaced = false
    for (let word of words) {
		// The currentCount variable will be the number of each letter seen in the hash map of the licensePlate alphabet letters
        let currentCount = 0
		// Clone the hash map so we would not mutate the original on each loop of word
        let cloneHash = {...hash}
		// Start looping through each letter in the word
        for (let i = 0; i < word.length; i++) {
			// If the letter exist in the hashMap we increment the value of currentCount and decrement the value of the cloned hash
            if (cloneHash[word[i]]) {
                currentCount += 1
                cloneHash[word[i]]--
            }
        }
		// If the current count is equals to the max replace the shortestCompletingWord variable as the new shortestCompletingWord and change the replaced value to true for the first time
        if (!replaced && currentCount === max) {
            shortestCompletingWord = word
            replaced = true
        }
		// If the shortestCompletingWord is already replaced we compare the current length of the word if it is less than the current shortestCompletingWord length and if the currentCount is equals to the max
        if (replaced && currentCount === max &&
            word.length < shortestCompletingWord.length) {
            shortestCompletingWord = word
        }
    }
    return shortestCompletingWord

};
