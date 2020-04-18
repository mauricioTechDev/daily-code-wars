I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.


function validPass(password){
if(password.length <= 3) return 'INVALID'
if(password.length >= 20) return 'INVALID'
let num = null
let arr = password.split('')
var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
for(let i = 0; i < arr.length; i++){
  if(Number(arr[i])){
    num = true
  }
     if(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(arr[i])){
       return 'INVALID'
     }
}
  return (num == true) ? 'VALID' : 'INVALID'
}
