function solution(grid) {
  const answer = [];
  const [rowLength, colLength] = [grid.length, grid[0].length];

  // 위, 아래, 왼쪽, 오른쪽에서 쏜 경우의 방문 여부 확인
  const visited = Array.from({ length: rowLength }, () =>
    Array.from({ length: colLength }, () => Array(4).fill(false)),
  );

  // 들어온 방향에 따라 나갈 방향을 결정하는 값
  const directionX = [1, -1, 0, 0];
  const directionY = [0, 0, 1, -1];

  // S, L, R순으로 현재 빛의 방향에 따라 다음에 나오는 경우의 수
  const directionCases = [
    [0, 3, 2], // 위, 위에서 갔을 때 S면 0, L이면 3, R이면 2
    [1, 2, 3], // 아래, 아래에서 갔을 때 S면 1, L이면 2, R이면 3
    [2, 0, 1], // 왼쪽, 왼쪽에서 갔을 때 S면 2, L이면 0, R이면 3
    [3, 1, 0], // 오른쪽, 오른쪽에서 갔을 때 S면 3, L이면 1, R이면 0
  ];

  for (let i = 0; i < rowLength; i++) {
    // 행마다
    for (let j = 0; j < colLength; j++) {
      // 각 열을
      for (let k = 0; k < 4; k++) {
        // 네방향에서 접근한다.
        // 0: 위 | 1: 아래 | 2: 왼쪽 | 3: 오른쪽
        if (visited[i][j][k]) continue; // true인 경우 빛을 쏜 적이 있어 싸이클이 이미 존재함을 의미하므로 continue

        let currentX = i;
        let currentY = j;
        let dir = k;
        let count = 0;

        while (!visited[currentX][currentY][dir]) {
          count++;
          visited[currentX][currentY][dir] = true;

          switch (grid[currentX][currentY]) {
            case "S":
              dir = directionCases[dir][0];
              break;
            case "L":
              dir = directionCases[dir][1];
              break;
            case "R":
              dir = directionCases[dir][2];
              break;
          }

          // 좌표를 이동
          currentX += directionX[dir];
          currentY += directionY[dir];

          // 이동한 좌표에 따라 좌표를 다시 수정
          currentX =
            currentX === rowLength // 끝 행에서 넘어 갔으면 처음으로
              ? 0
              : currentX < 0 // 처음 행에서 넘어 갔으면 끝으로
                ? rowLength - 1
                : currentX;

          currentY =
            currentY === colLength
              ? 0
              : currentY < 0
                ? colLength - 1
                : currentY;
        }

        answer.push(count);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}