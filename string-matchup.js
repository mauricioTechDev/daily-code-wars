//Given two arrays of strings, return the number of times each string of the second array appears in the first array.

//Example
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']
//How many times do the elements in array2 appear in array1?

//'abc' appears twice in the first array (2)
//'cde' appears only once (1)
//'uap' does not appear in the first array (0)
//Therefore, solve(array1, array2) = [2, 1, 0]

//Good luck!

function solve(a,b){
  let map = {};
  let countArr =[];
  
  for(let i = 0; i < a.length; i++){
    if(map[a[i]]){
      map[a[i]]++
    } else {
      map[a[i]] = 1
    }
  }
  
  for(let j = 0; j < b.length; j++){
    if(map[b[j]]){
      countArr.push(map[b[j]])
    } else {
      countArr.push(0)
    }
  }
  
  return countArr
}
