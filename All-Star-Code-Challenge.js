// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
//
// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""
var removeVowels = function(str){
//code here
//using regex in order to replace vowel with ''
return str.replace(/[a,e,i,o,u]/g, '')
}
