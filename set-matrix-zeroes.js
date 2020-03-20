Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?


var setZeroes = function(matrix) {
    let marked = null
    let hight = matrix.length
    let width = matrix[0].length
    let rowOfZeros = []
    let columnOfZeros = []

    for(let i = 0; i<hight; i++){
        for(let j = 0; j<width; j++){
            if(matrix[i][j] == 0){
                rowOfZeros[i] = true;
                columnOfZeros[j] = true;
            }
        }
    }
    for(let i = 0; i<hight; i++){
        for(let j = 0; j<width; j++){

            if(rowOfZeros[i] || columnOfZeros[j]){
              matrix[i][j] = 0

            }
        }
    }
    console.log(matrix)
};
