//Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

//For example:

//"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
//"a"             --> "invalid string"
//TEST
//Test.assertSimilar(evenChars ("a"), "invalid string")
//Test.assertSimilar(evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])



function evenChars(string) {
//keep coding!
  if(string.length < 2){
    return 'invalid string';
  } else if (string.length > 100){
    return 'invalid string';
  }
  
  let arr = string.split('');
  let arrLength = arr.length;
  let answer = [];
  
  for(let i = 0; i < arrLength; i++){
    if(i%2 !== 0){
      answer.push(arr[i]);
    }
  }
  
  return answer;
  
}
