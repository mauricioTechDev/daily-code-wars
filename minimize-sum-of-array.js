// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
//
// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22)


function minSum(arr) {
  let sorted = arr.sort((a,b) => a-b);                  //sort the array
  let sum = 0;

  for (let i=0; i<arr.length/2; i++){
    sum += sorted[i] * sorted[sorted.length - (1 + i)]; //we know the smallest sum will be from
  }                                                     //multiplying the greatest numbers by the smallest numbers
                                                        //sorting the array solved this for us.

  return sum;
}
