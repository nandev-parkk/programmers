function solution(board, skill) {
  const copied = Array.from({ length: board.length + 1 }, () =>
    Array.from({ length: board[0].length + 1 }, () => 0),
  );

  for (const [type, r1, c1, r2, c2, degree] of skill) {
    if (type === 1) {
      copied[r1][c1] -= +degree;
      copied[r1][c2 + 1] -= -degree;
      copied[r2 + 1][c1] -= -degree;
      copied[r2 + 1][c2 + 1] -= +degree;
    } else {
      copied[r1][c1] += +degree;
      copied[r1][c2 + 1] += -degree;
      copied[r2 + 1][c1] += -degree;
      copied[r2 + 1][c2 + 1] += +degree;
    }
  }

  // 위에서 아래로 누적합
  for (let i = 1; i < copied.length; i++) {
    for (let j = 0; j < copied[0].length; j++) {
      copied[i][j] = copied[i - 1][j] + copied[i][j];
    }
  }

  // 왼쪽에서 오른쪽으로 누적합
  for (let i = 0; i < copied.length; i++) {
    for (let j = 1; j < copied[0].length; j++) {
      copied[i][j] = copied[i][j - 1] + copied[i][j];
    }
  }

  // 전체 계산
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] += copied[i][j];
    }
  }

  const answer = board.reduce((acc, cur) => {
    const filtered = cur.filter((num) => num > 0);

    return acc + filtered.length;
  }, 0);

  return answer;
}