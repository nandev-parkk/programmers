function solution(n, s) {
  // 숫자가 균등할때 가장 큰수가 나옴
  if (n > s) return [-1];

  const answer = [];
  const q = Math.floor(s / n);
  let r = s % n;

  if (!r) {
    for (let i = 0; i < n; i++) {
      answer.push(q);
    }
  } else {
    for (let i = 0; i < n; i++) {
      if (r > 0) {
        answer.push(q + 1);
        r--;
      } else {
        answer.push(q);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}