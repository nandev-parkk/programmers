function solution(targets) {
  const sortedTargets = targets.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let interceptionPoint = 0;

  for (const [start, end] of sortedTargets) {
    if (start >= interceptionPoint) {
      count++;
      interceptionPoint = end;
    }
  }

  return count;
}