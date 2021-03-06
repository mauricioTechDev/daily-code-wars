In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:
dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be alphabet characters only. Don't worry about lower and upper case. See test cases for more examples.

Good luck!


function dup(s) {
  
  return s.map((el) => {
    let arr = el.split('');
    for(let i = 0; i < arr.length -1; i++){
      if(arr[i] === arr[i+1]){
        arr.splice(i,1)
        i--
      }
    }
    return arr.join('')
  })
  
};
