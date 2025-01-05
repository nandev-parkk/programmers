function solution(park, routes) {
 // 시작점 찾기
  const currentCoordinates = [];

  for (let i = 0; i < park.length; i++) {
    if (!park[i].includes("S")) continue;

    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] !== "S") continue;

      currentCoordinates.push(i, j);
      break;
    }
  }

  // y축 경계
  const yAxisMinBoundary = 0;
  const yAxisMaxBoundary = park.length - 1;

  // x축 경계
  const xAxisMinBoundary = 0;
  const xAxisMaxBoundary = park[0].length - 1;

  // 명령 수행
  for (const [op, _, n] of routes) {
    // const temp = [...currentCoordinates];

    let [y, x] = currentCoordinates;

    for (let i = 1; i <= n; i++) {
      if (op === "S") {
        y += 1;
      } else if (op === "N") {
        y -= 1;
      } else if (op === "E") {
        x += 1;
      } else {
        x -= 1;
      }

      // 경계 확인
      if (
        y < yAxisMinBoundary ||
        y > yAxisMaxBoundary ||
        x < xAxisMinBoundary ||
        x > xAxisMaxBoundary
      )
        break;

      // 값이 X인지 확인
      if (park[y][x] === "X") {
        if (op === "S" || op === "N") {
          y = currentCoordinates[0];
        } else {
          x = currentCoordinates[1];
        }

        break;
      }
    }

    // 경계 확인
    if (
      y < yAxisMinBoundary ||
      y > yAxisMaxBoundary ||
      x < xAxisMinBoundary ||
      x > xAxisMaxBoundary
    )
      continue;

    currentCoordinates[0] = y;
    currentCoordinates[1] = x;
  }

  return currentCoordinates;
}