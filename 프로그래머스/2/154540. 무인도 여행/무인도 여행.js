function solution(maps) {
  const answer = [];
  const N = maps.length;
  const M = maps[0].length;

  const queue = [];
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const bfs = (position) => {
    const [x, y, life] = position;

    queue.push([x, y]);
    visited[x][y] = true;
    let count = life;

    while (queue.length) {
      let [qx, qy] = queue.shift();

      for (const [dx, dy] of directions) {
        let nx = qx + dx;
        let ny = qy + dy;

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          !visited[nx][ny] &&
          maps[nx][ny] !== "X"
        ) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          count += parseInt(maps[nx][ny]);
        }
      }
    }

    answer.push(count);
  };

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (maps[x][y] === "X" || visited[x][y]) continue;

      bfs([x, y, parseInt(maps[x][y])]);
    }
  }

  return !answer.length ? [-1] : answer.sort((a, b) => a - b);
}