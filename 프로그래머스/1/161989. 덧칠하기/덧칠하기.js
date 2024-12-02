function solution(n, m, section) {
     let count = 0;
  let target = 0;

  for (const i in section) {
    if (section[i] <= target) continue;

    target = section[i] + m - 1;
    count++;
  }

  return count;
}