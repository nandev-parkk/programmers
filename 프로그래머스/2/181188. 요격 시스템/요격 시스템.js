function solution(targets) {
  const sortedTargets = targets.sort((a, b) => a[1] - b[1]);

  // for문을 돌면서 다음꺼랑 안겹치면 + 1
  let count = 0;
  let endPoint = 0;

  for (let i = 0; i < sortedTargets.length; i++) {
    let [currentStart, currentEnd] = sortedTargets[i];

    if (currentStart >= endPoint) {
      count++;
      endPoint = currentEnd;
    }
  }

  return count;
}