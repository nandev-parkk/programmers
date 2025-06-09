function solution(storage, requests) {
  const directions = [
    [0, 1], // 오른쪽
    [0, -1], // 왼쪽
    [1, 0], // 아래
    [-1, 0], // 위
  ];

  const [M, N] = [storage.length, storage[0].length];

  let answer = M * N;

  const mappedStorage = storage.map((s) => s.split(""));

  const bfs = (x, y, storage) => {
    const visited = Array.from({ length: M }, () => Array(N).fill(false));
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length) {
      let [qx, qy] = queue.shift();

      for (const [dx, dy] of directions) {
        let [nx, ny] = [qx + dx, qy + dy];

        // 경계에 연결된 경우
        if (nx < 0 || nx >= M || ny < 0 || ny >= N) {
          mappedStorage[x][y] = "";

          return 1;
        }

        if (!visited[nx][ny] && storage[nx][ny] === "") {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }

    return 0;
  };

  for (const req of requests) {
    const snapshot = JSON.parse(JSON.stringify(mappedStorage));

    for (let x = 0; x < M; x++) {
      for (let y = 0; y < N; y++) {
        if (req.length === 2) {
          // 크레인으로 들어
          if (snapshot[x][y] === req[0]) {
            mappedStorage[x][y] = "";
            answer -= 1;
          }
        } else {
          if (snapshot[x][y] === req[0]) {
            answer -= bfs(x, y, snapshot);
          }
        }
      }
    }
  }

  return answer;
}