function solution(m, n, startX, startY, balls) {
  const answer = [];

  const getDistance = (x, y) => (startX - x) ** 2 + (startY - y) ** 2;

  for (const [targetX, targetY] of balls) {
    let min = Infinity;

    // 위쪽으로 갈 수 있는 경우
    if (!(startX === targetX && startY < targetY)) {
      min = Math.min(min, getDistance(targetX, 2 * n - targetY));
    }

    // 아래쪽으로 갈 수 있는 경우
    if (!(startX === targetX && startY > targetY)) {
      min = Math.min(min, getDistance(targetX, -targetY));
    }

    // 왼쪽으로 갈 수 있는 경우
    if (!(startY === targetY && startX > targetX)) {
      min = Math.min(min, getDistance(-targetX, targetY));
    }

    // 오른쪽으로 갈 수 있는 경우
    if (!(startY === targetY && startX < targetX)) {
      min = Math.min(min, getDistance(2 * m - targetX, targetY));
    }

    answer.push(min);
  }

  return answer;
}