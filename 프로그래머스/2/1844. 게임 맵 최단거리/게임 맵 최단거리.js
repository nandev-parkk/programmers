function solution(maps) {
  const queue = [[0, 0, 1]]; // 현재 위치와 이동 횟수 기본값 추가
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const n = maps[0].length; // 가로길이
  const m = maps.length; // 세로 길이

  while (queue.length) {
    const [row, col, count] = queue.shift();

    // 적 진영 도착시 리턴
    if (row === n - 1 && col === m - 1) return count;

    for (const [x, y] of direction) {
      const newRow = row + x;
      const newCol = col + y;

      // 새로운 위치가 맵을 벗어나지 않고 벽이 아니거나 방문 하지 않은 곳(방문하면 0으로 처리)이면 이동
      if (
        newRow >= 0 &&
        newRow < n &&
        newCol >= 0 &&
        newCol < m &&
        !!maps[newCol][newRow]
      ) {
        queue.push([newRow, newCol, count + 1]);
        maps[newCol][newRow] = 0;
      }
    }
  }

  return -1;
}