// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
let string = s.split('')
for(let i=0; i<string.length; i++){
if (string[i] == '!'){
string.splice(i,1)
i--
}
}
  return string.join('');
}
