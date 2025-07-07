function solution(targets) {
  const sortedTargets = targets.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let interceptionPoint = 0;

  for (let i = 0; i < sortedTargets.length; i++) {
    let [currentStart, currentEnd] = sortedTargets[i];

    if (currentStart >= interceptionPoint) {
      count++;
      interceptionPoint = currentEnd;
    }
  }

  return count;
}