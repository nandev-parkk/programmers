function solution(k, ranges) {
  let n = 0; // k가 초항인 우박수열이 1이 될때까지의 횟수. 즉, x축 인덱스 길이

  // 1. 콜라츠 수열 만들어버려
  const collatz = [k];

  while (k !== 1) {
    if (!(k % 2)) {
      k = k / 2;
      collatz.push(k);
    } else {
      k = k * 3 + 1;
      collatz.push(k);
    }

    n++;
  }

  // 2. 각 변의 넓이를 구해버려
  const calculatedCollatz = [];

  // 마지막은 돌 필요가 없으므로 length - 1보다 작을때까지만 돈다.
  for (let i = 0; i < collatz.length - 1; i++) {
    const upperSide = collatz[i];
    const lowerSide = collatz[i + 1];

    calculatedCollatz.push((upperSide + lowerSide) / 2);
  }

  // 3. 범위 내의 변의 넓이를 다 더해서 리턴해버려
  const answer = ranges.map(([a, b]) => {
    const right = n - Math.abs(b);

    if (a > right) return -1;

    let sum = 0;

    for (let i = a; i < right; i++) {
      sum += calculatedCollatz[i];
    }

    return sum;
  });

  return answer;
}