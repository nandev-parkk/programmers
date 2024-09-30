// 두 직선이 평행한지 확인하기 위해 두 직선의 기울기를 구하고 기울기가 같은지 비교해야 함
// 기울기를 구하는 공식은 다음과 같다. m = (y2 - y1) / (x2 - x1)

function calculateSlope(firstDot, secondDot) {
  return (firstDot[1] - secondDot[1]) / (firstDot[0] - secondDot[0]);
}

function solution(dots) {
  const index = [0, 1, 2, 3];
  let count = 0;

  for (let i = 1; i < index.length; i++) {
    for (let j = 1; j < index.length; j++) {
      const filteredIndex = index.filter((k) => k !== 0 && k !== i && k !== j);

      if (filteredIndex.length < 2) continue;

      const firstResult = calculateSlope(dots[0], dots[i]);
      const secondResult = calculateSlope(
        dots[filteredIndex[0]],
        dots[filteredIndex[1]],
      );

      if (firstResult === secondResult) {
        count = 1;
      }
    }
  }

  return count;
}