The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive


var splitInParts = function(s, partLength){
   //turn into an array
   let arr = s.split('')
   let index = 0
//    counter keeps track of the current size of seub array
   let counter = 0
//    loop through the array and add a space whrerever the index%partLength === 0
  while(index < arr.length){
    if(counter === partLength){
      arr.splice(index, 0, ' ')
      index++
//       when sup array found reset counter
      counter = 0
    } else {
      index++
      counter++
    }
  }
// turn it back into a string
  return arr.join('')
}
