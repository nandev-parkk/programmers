function solution(board) {
  let answer = -1;

  const N = board.length;
  const M = board[0].length;

  const directions = [
    [0, 1], // 오른쪽
    [0, -1], // 왼쪽
    [1, 0], // 아래
    [-1, 0], // 위
  ];

  // 시작점을 구하는 로직
  const startPosition = [];

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (board[x][y] === "R") startPosition.push(x, y);
    }
  }

  const queue = [];

  // 배열 길이와 동일하게 만듦
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const bfs = (position) => {
    const [x, y] = position;

    queue.push([x, y, 0]);
    visited[x][y] = true;

    while (queue.length) {
      let [qx, qy, count] = queue.shift();

      if (board[qx][qy] === "G") {
        answer = count;
        break;
      }

      for (const [dx, dy] of directions) {
        let nx = qx + dx;
        let ny = qy + dy;

        while (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          board[nx][ny] !== "D"
        ) {
          nx += dx;
          ny += dy;
        }

        nx -= dx;
        ny -= dy;

        if (!visited[nx][ny]) {
          queue.push([nx, ny, count + 1]);
          visited[nx][ny] = true;
        }
      }
    }
  };

  bfs(startPosition);

  return answer;
}