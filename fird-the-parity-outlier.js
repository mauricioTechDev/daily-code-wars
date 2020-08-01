You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

// TYPESCRIPT
export function findOutlier(integers: number[]): number {
  interface mapArr {
    [key: string]: number[]
  }
  const map: mapArr ={
    even: [],
    odd: [],
  }
  
  for(let i=0; i < integers.length; i++){
    if(integers[i]%2 === 0){
      map['even'].push(integers[i])
    }else {
      map['odd'].push(integers[i])
    }
  }  
  
  return map['odd'].length > map['even'].length ? map['even'][0] : map['odd'][0]
}




// JAVASCRIPT
function findOutlier(integers){
  let map = {
    odd: [],
    even: []
  }
  
  for(let i=0; i < integers.length; i++){
    if(integers[i]%2 === 0){
      map['even'].push(integers[i])
    }else {
      map['odd'].push(integers[i])
    }
  }  
  
  return map['odd'].length > map['even'].length ? map['even'][0] : map['odd'][0]
}
