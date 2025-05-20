function solution(board) {
  let answer = 0;

  // 가로나 세로의 길이가 1인 경우 1 리턴
  if (board.length === 1 || board[0].length === 1) return 1;

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          board[i][j] +
          Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]);

        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer ** 2;
}