// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//
// #Examples:
// 
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"


function getMiddle(s)
{
  //Code goes here!
  let count = 0
  for (let i=0; i<s.length; i++){
   count ++
  }
  if(count%2 !== 0){
  let middleNumber = count / 2
  return s[Math.floor(middleNumber)]
  } else {
  let evenMiddleNumber = count / 2
  return s.slice(Math.floor(evenMiddleNumber - 1), Math.floor(evenMiddleNumber) + 1 )
  }
}
