Given a 2D array A, each cell is 0 (representing sea) or 1 (representing land)

A move consists of walking from one land square 4-directionally to another land square, or off the boundary of the grid.

Return the number of land squares in the grid for which we cannot walk off the boundary of the grid in any number of moves.



Example 1:

Input: [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation:
There are three 1s that are enclosed by 0s, and one 1 that isn't enclosed because its on the boundary.
Example 2:

Input: [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation:
All 1s are either on the boundary or can reach the boundary.


Note:

1 <= A.length <= 500
1 <= A[i].length <= 500
0 <= A[i][j] <= 1
All rows have the same size.



/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
    let count = 0
    let yAxis = A.length
    let xAxis = A[0].length

//     check all four borders for 1

//     check left and right sides find 1 turn to -1
    for(let i = 0; i < yAxis; i++){
        bfs(i, 0, A, yAxis, xAxis)
        bfs(i, xAxis-1, A, yAxis, xAxis)
    }

//     check top and bottome side find 1 turn to -1
    for(let j = 0; j < xAxis; j++){
        bfs(0, j, A, yAxis, xAxis)
        bfs(yAxis-1, j, A, yAxis, xAxis)
    }

//     go through the whole array and count all of the 1's
    for(let i = 0; i < yAxis; i++){
        for(let j = 0; j < xAxis; j++){
            if(A[i][j] === 1){
                count++
            }
        }
    }
    return count

};

const bfs = (i, j, A, yAxis, xAxis) => {
    let queue = []
    let directions = [[-1,0], [1,0], [0,-1], [0,1]]


    if(A[i][j] ===  1){
            A[i][j] = -1
        queue.push(new Cell(i, j))

    while(queue.length > 0){
        let cell = queue.shift()

            directions.forEach(([y,x]) => {
                let row = cell.row + x;
                let col = cell.col + y;
                if(row >= 0 && row < yAxis && col >= 0 && col < xAxis && A[row][col] === 1){
                    A[row][col] = -1
                    queue.push(new Cell(row, col))
                }
            })
        }
    }

}

class Cell {
    constructor(i, j){
        this.row = i;
        this.col = j;
    }
}
