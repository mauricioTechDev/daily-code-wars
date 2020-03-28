Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!







function capitalize(s){
let ans = [];
var even = '', odd = ''
for(let i = 0; i< s.length; i++){
  if (i%2 == 0){
    even += s[i].toUpperCase()
  }
  if (i%2 !== 0){
    even += s[i]
  }
  if(i == s.length-1){
      ans.push(even)
  }
}
for(let i = 0; i< s.length; i++){

  if (i%2 == 0){
    odd += s[i]
  }
  if (i%2 !== 0){
    odd += s[i].toUpperCase()
  }
  if(i == s.length-1){
      ans.push(odd)
  }
}

  return ans;
};
