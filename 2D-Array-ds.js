// Given a 6X6 2D Array, :
//
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:
//
// a b c
//   d
// e f g
// There are 16 hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.
//
// For example, given the 2D array:
//
// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// We calculate the following 16 hourglass values:
//
// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
// 9, 17, 25, 18
// Our highest hourglass value is 28 from the hourglass:
//
// 0 4 3
//   1
// 8 6 6
//
// Function Description
//
// Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.
//
// hourglassSum has the following parameter(s):
//
// arr: an array of integers




function hourglassSum(arr) {

     let hourglasses = [];

          for (let row = 0; row <= 3; row++) {
               for (let col = 0; col <= 3; col++) {
                    // let sum = 0;

                    let sum = arr[row][col]+arr[row][col + 1]+arr[row][col + 2]+arr[row + 1][col + 1]+arr[row + 2][col]+arr[row + 2][col + 1]+arr[row + 2][col + 2];

                    hourglasses.push(sum);
               }
          }

     return (hourglasses.length > 0) ? Math.max(...hourglasses) : 0;
}
