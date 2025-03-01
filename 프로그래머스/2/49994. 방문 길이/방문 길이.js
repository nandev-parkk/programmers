function solution(dirs) {
  const answer = new Map();
  const coordinates = [0, 0];

  for (const dir of dirs) {
    const [x, y] = coordinates;
    let tempX = x,
      tempY = y;

    if (dir === "L") {
      tempX -= 1;
    } else if (dir === "R") {
      tempX += 1;
    } else if (dir === "U") {
      tempY += 1;
    } else {
      tempY -= 1;
    }

    if (tempX === -6 || tempX === 6 || tempY === -6 || tempY === 6) continue;

    const key = `${[x, y]} => ${[tempX, tempY]}`;
    const reverseKey = `${[tempX, tempY]} => ${[x, y]}`;

    if (answer.has(reverseKey)) {
      answer.set(reverseKey, (answer.get(reverseKey) || 0) + 1);
    } else {
      answer.set(key, (answer.get(key) || 0) + 1);
    }

    coordinates[0] = tempX;
    coordinates[1] = tempY;
  }

  return answer.size;
}