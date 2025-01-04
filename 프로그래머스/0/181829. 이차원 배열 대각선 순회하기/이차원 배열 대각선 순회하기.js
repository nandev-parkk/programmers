function solution(board, k) {
  let count = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j > k) continue;

      count += board[i][j];
    }
  }

  return count;
}