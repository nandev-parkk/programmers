function solution(board) {
  const [N, M] = [board.length, board[0].length];

  const directions = [
    [-1, 0], // 위
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [0, 1], // 오른쪽
  ];

  // 3차원 배열인 이유: 같은 칸이라도 위 또는 왼쪽에서 온 경우 코너 비용이 달라지기 때문
  const dp = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array.from({ length: 4 }, () => Infinity)),
  );

  // 시작점은 항상 (0, 0)이므로 아래 또는 오른쪽 방향으로 출발하기 위해 최초 2개의 값을 넣음
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

  return Math.min(...dp[N - 1][M - 1]);
}