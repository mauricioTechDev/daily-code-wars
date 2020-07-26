Task
You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

Example
Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]


function splitAndAdd(arr, n) {
  if(n === 0 || arr.length === 1)
    return arr;
  
  let leftArr = [];
  let rightArr = [];  
  while(arr.length > 0) {
    if(arr.length > 0)
      rightArr.unshift(arr.pop());
    if(arr.length > 0)
      leftArr.push(arr.shift());
  }
  if(leftArr.length < rightArr.length)
    leftArr.unshift(0)
  let a2 = [];
  for(let i = 0; i < leftArr.length; i++)
    a2.push(leftArr[i] + rightArr[i]);
  return splitAndAdd(a2, n - 1);
}
