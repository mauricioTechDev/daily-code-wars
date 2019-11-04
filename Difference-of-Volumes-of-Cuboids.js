// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
//
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//
// Your function will be tested with pre-made examples as well as random ones.


function findDifference(a, b) {
  //loading...
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  let c = a.reduce(reducer)
  let d = b.reduce(reducer)
  let e = d - c
  if (d > c){
  let e = d - c;
  return e
  } else if (c> d){
    let e = c - d;
    return e
  } else {
   let e = c - d
   return e
  }
}
