Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.



/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = (board) => {
  if(board.length === 0){
    return
  }

  const xAxis = board.length;
  const yAxis = board[0].length;

  // go through 4 sides check for 'O' then change to '-' b/c they cannot be surrounded by zeros
  for(let i = 0; i < xAxis; i++){
    //checks left wall
    bfs(i, 0, board, xAxis, yAxis);
    //checks the right wall
    bfs(i, yAxis - 1, board, xAxis, yAxis);
  }


    for (let j = 0; j < yAxis; j++) {
//         check top row
    bfs(0, j, board, xAxis, yAxis);
//         check bottom row
    bfs(xAxis - 1, j, board, xAxis, yAxis);
  }

  // Go through again and change the '-' to 'O' and the 'O' to 'X''s
  for(let i = 0; i < xAxis; i++){
    for(let j = 0; j < yAxis; j++){
      if(board[i][j] === '-'){
        board[i][j] = 'O'
      } else if(board[i][j] === 'O'){
        board[i][j] = 'X'
      }
    }
  }

  return board
}

const bfs = (i, j, board, xAxis, yAxis) => {
  const queue = [];
  const directions = [[-1,0],[1,0],[0,-1],[0,1]]

  if(board[i][j] === 'O'){
    board[i][j] = '-'
    queue.push(new Cell(i, j))

    while(queue.length > 0){
      const cell = queue.shift();

      directions.forEach(([dy, dx]) => {
          // console.log(board)
        const row = cell.row + dy;
        const col = cell.col + dx;

        if(row >= 0 && row < xAxis && col >= 0 && col < yAxis && board[row][col] === 'O'){
          board[row][col] = '-';
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
