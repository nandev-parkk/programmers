const checkWinner = (board, figure) => {
  const answerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [i, j, k] of answerLines) {
    if (board[i] === figure && board[j] === figure && board[k] === figure)
      return true;
  }

  return false;
};

function solution(board) {
  let [O, X] = [0, 0];

  // 하나의 배열로 만들어 버림
  const mappedBoard = board.map((b) => b.split("")).flat();

  for (const figure of mappedBoard) {
    if (figure === "O") O++;
    else if (figure === "X") X++;
  }

  // X가 후공이므로 많으면 안됌
  // O와 X의 차이는 항상 1을 초과하면 안됌
  if (O < X || 1 < O - X) return 0;

  const isOWin = checkWinner(mappedBoard, "O");
  const isXWin = checkWinner(mappedBoard, "X");

  // 둘 다 이기거나 O가 이겼는데 O - X가 1이 아니거나 X가 이겼는데 O랑 X가 같지 않으면 0 리턴
  if ((isOWin && isXWin) || (isOWin && O - X !== 1) || (isXWin && O !== X))
    return 0;
    
    return 1
}