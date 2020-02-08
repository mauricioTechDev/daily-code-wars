// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
// Example:
//
// Input:
//
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
// 'alpha beta gamma delta'


function removeDuplicateWords (s) {
  // your perfect code...
  let arr = s.split(' ')
  let reduced = [...new Set(arr)]
  console.log(reduced)
  return reduced.join(' ')
}

function removeDuplicateWords (s) {
  // your perfect code...
  let arr = s.split(' ')
  let fileteredArray = arr.filter((item, index) => arr.indexOf(item) === index)
  return fileteredArray.join(' ')
}
