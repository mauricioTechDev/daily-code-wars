// https://www.codewars.com/kata/5878520d52628a092f0002d0


function stringTransformer(str) {
  // Your code here
  const arr = str.split(' ').reverse().join(' ').split('')
    
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == ' '){
      continue;
      
    } else if (arr[i] === arr[i].toLowerCase()){
      arr[i] = arr[i].toUpperCase();
    }
    else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr.join('')
  
}
