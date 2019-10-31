// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.



function isPalindrome(x) {
  // your code here
    let reverseX = x.split("").reverse().join("").toUpperCase()
    let originalX = x.toUpperCase()
    if (reverseX === originalX){
      return true
    } else {
      return false
    }
}
