// Build a function that can get all the integers between two given numbers.

// Example:

// (2,9)

// Should give you this output back:

// [ 3, 4, 5, 6, 7, 8 ]

// If startNum is the same as endNum, return an empty array.

const range = (startNum, endNum) => { 
  if(startNum == endNum) return [];
  
  let ans = [];
  while(startNum < endNum-1) {
    startNum++
    ans.push(startNum);
  }
  return ans;
};
