function solution(n, m, section) {
   let count = 0;
  let distance = 0;

  for (const i in section) {
    if (section[i] <= distance) continue;

    distance = section[i] + m - 1;
    count++;
  }

  return count;
}