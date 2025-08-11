function solution(line) {
  // 교점 구하기
  const intersectionPoints = [];

  for (let i = 0; i < line.length; i++) {
    for (let j = i; j < line.length; j++) {
      const [A, B, E] = line[i];
      const [C, D, F] = line[j];

      if (!(A * D - B * C)) continue;

      const x = (B * F - E * D) / (A * D - B * C);
      const y = (E * C - A * F) / (A * D - B * C);

      if (Number.isInteger(x) && Number.isInteger(y))
        intersectionPoints.push([x, y]);
    }
  }

  // 영역 구하기
  // x
  intersectionPoints.sort((a, b) => a[0] - b[0]);

  const [minX, maxX] = [
    intersectionPoints[0][0],
    intersectionPoints[intersectionPoints.length - 1][0],
  ];

  // y
  intersectionPoints.sort((a, b) => a[1] - b[1]);

  const [minY, maxY] = [
    intersectionPoints[0][1],
    intersectionPoints[intersectionPoints.length - 1][1],
  ];

  const answer = Array.from({ length: maxY - minY + 1 }).map(() =>
    Array.from({ length: maxX - minX + 1 }, () => "."),
  );

  // 별 찍기
  for (const [x, y] of intersectionPoints) {
    answer[y - minY][x - minX] = "*";
  }

  return answer.map((arr) => arr.join("")).reverse();
}