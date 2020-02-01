// Bob is a lazy man.
//
// He needs you to create a method that can determine how many letters and digits are in a given string.
//
// Example:
//
// "hel2!lo" --> 6
//
// "wicked .. !" --> 6
//
// "!?..A" --> 1

function countLettersAndDigits(input) {
  let count = 0;
  let lowerCase = input.toLowerCase()
    for (let i= 0; i<=lowerCase.length; i++) {
//         ch = tolower(ch);
        if ('a' <= lowerCase[i] && lowerCase[i] <= 'z') {
            count++;
        }
        if ('0' <= lowerCase[i] && lowerCase[i] <= '9') {
            count++;
        }
    }
    return count;
}
