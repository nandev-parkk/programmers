function solution(land) {
  const [N, M] = [land.length, land[0].length];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const answer = {};

  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const queue = [];

  const bfs = (position) => {
    const set = new Set();
    const [x, y] = position;
    let count = 1;

    visited[x][y] = true;
    queue.push([x, y]);

    while (queue.length) {
      const [qx, qy] = queue.shift();

      set.add(qy);

      for (const [dx, dy] of directions) {
        let nx = qx + dx;
        let ny = qy + dy;

        while (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          !visited[nx][ny] &&
          land[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          count++;
        }
      }
    }

    for (const i of [...set.values()]) {
      answer[i] = (answer[i] || 0) + count;
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (land[i][j] && !visited[i][j]) {
        bfs([i, j]);
      }
    }
  }

  return Math.max(...Object.values(answer));
}