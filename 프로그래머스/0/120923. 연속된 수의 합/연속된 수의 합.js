function solution(num, total) {
  // 1. x에 x + 1, x + 2, x + n ... 해준다.
  let sum = 0;

  for (let i = 1; i < num; i++) {
    sum += i;
  }

  // 2. total에서 sum을 뺀다.
  const difference = total - sum;

  // 3. difference / num을 해준다.
  const x = difference / num;
  const answer = Array.from({ length: num }, (_, i) => x + i);

  return answer;
}