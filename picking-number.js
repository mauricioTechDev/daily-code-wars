Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference between any two of the chosen integers is less than or equal to . For example, if your array is , you can create two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

Function Description

Complete the pickingNumbers function in the editor below. It should return an integer that represents the length of the longest array that can be created.

pickingNumbers has the following parameter(s):

a: an array of integers
Input Format

The first line contains a single integer , the size of the array .
The second line contains  space-separated integers .

Constraints

The answer will be .
Output Format

A single integer denoting the maximum number of integers you can choose from the array such that the absolute difference between any two of the chosen integers is .

Sample Input 0

6
4 6 5 3 3 1
Sample Output 0

3
Explanation 0

We choose the following multiset of integers from the array: . Each pair in the multiset has an absolute difference  (i.e.,  and ), so we print the number of chosen integers, , as our answer.

Sample Input 1

6
1 2 2 3 1 2
Sample Output 1

5
Explanation 1

We choose the following multiset of integers from the array: . Each pair in the multiset has an absolute difference  (i.e., , , and ), so we print the number of chosen integers, , as our answer.


function pickingNumbers(a) {

 let map = {}
    for(let i = 0; i < a.length; i++){
        if(map[a[i]]){
            map[a[i]]++
        } else {
            map[a[i]] = 1
        }
    }
  console.log(map)
  let maxarr = []
  for(const num in map){
    maxarr.push([num, map[num]])
  }
  if(maxarr.length == 1) return maxarr[0][1]
//   console.log(maxarr)
  let maxCount = Number.NEGATIVE_INFINITY
  for(let j=0; j<maxarr.length - 1; j++){
    if(Number(maxarr[j+1][0]) - Number(maxarr[j][0]) <= 1){
      if(maxarr[j+1][1] + maxarr[j][1] >= maxCount){
        maxCount = maxarr[j+1][1] + maxarr[j][1]
      }
    }
  }
  return maxCount
}

function pickingNumbers(a) {
Write your code here
    Write your code here
          const A = a.sort((a, b) => (a - b))
  let streak = 0,
      longestStreak = 0,
      start = 0;
  for (let i = 1; i < A.length; i += 1) {
    if ((A[i] - A[start]) <= 1) streak += 1
    else {
      // store longest streak and reset streak
      if (streak > longestStreak) longestStreak = streak
      streak = 0
      start = i
    }
  }
  if (streak > longestStreak) longestStreak = streak
  return longestStreak + 1
}
