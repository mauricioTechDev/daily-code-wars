Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

arr: an array of integers .
Input Format

The first line contains a single integer, , the number of rows and columns in the matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Print the absolute difference between the sums of the matrix's two diagonals as a single integer.


function diagonalDifference(arr) {
    // Write your code here
  // length of input matrix.
    const length = arr.length;
    let diagonal1 = 0, diagonal2 = 0;
    // Looping through the array and summing the diagonals.
    for(let i = 0; i < length; i++){
      // Calculating the primary diagonal.
        diagonal1 += arr[i][i];
      // Reversing the second dimension of array to calculate secondary diagonal.
        diagonal2 += arr[length -1 - i][i]
    }
    // return absolute difference value.
    return Math.abs(diagonal1 - diagonal2)
}
