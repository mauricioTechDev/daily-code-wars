Sort array by last character

Complete the function to sort a given array or list by last character of elements.

Element can be an integer or a string.

Example:
['acvd', 'bcc']  -->  ['bcc', 'acvd']
The last characters of the strings are d and c. As c comes before d, sorting by last character will give ['bcc', 'acvd'].

If two elements don't differ in the last character, then they should be sorted by the order they come in the array.




function sortMe(arr){
  // ...
  var sr = {};
  var last = [];
  for (var i = 0; i < arr.length; i++) {
    var s = arr[i].toString();
    if (sr[s[s.length - 1]]) {sr[s[s.length - 1]].push(arr[i])}
    else {sr[s[s.length - 1]] = [arr[i]];
    last.push(s[s.length - 1])
    }
  }
  last.sort();
  var res = [];
  for (var i = 0; i < last.length; i++) {
    res = res.concat(sr[last[i]]);
  }
  return res;
}

// Paramater array of string
// result is a sorted array according to the last letter of each string
//
