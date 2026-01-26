function solution(board) {
  const [N, M] = [board.length, board[0].length];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const dp = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array.from({ length: 4 }, () => Infinity)),
  );

  const queue = [
    [0, 0, 1, 0],
    [0, 0, 3, 0],
  ];

  while (queue.length) {
    const [qy, qx, dir, cost] = queue.shift();

    for (let i = 0; i < directions.length; i++) {
      const [ny, nx] = [qy + directions[i][0], qx + directions[i][1]];

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && !board[ny][nx]) {
        const newCost = cost + (i === dir ? 100 : 600);

        if (newCost < dp[ny][nx][i]) {
          dp[ny][nx][i] = newCost;

          queue.push([ny, nx, i, newCost]);
        }
      }
    }
  }

  return Math.min(...dp[board.length - 1][board[0].length - 1]);
}