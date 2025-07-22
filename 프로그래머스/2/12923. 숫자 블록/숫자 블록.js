function getDivisor(num) {
  if (num === 1) return 0;

  let temp = 0;

  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      if (Math.round(num / i) > 10000000) {
        temp = i;
        continue;
      }

      return Math.round(num / i);
    }
  }

  return temp || 1;
}

function solution(begin, end) {
  const answer = [];

  for (let i = begin; i <= end; i++) {
    answer.push(getDivisor(i));
  }

  return answer;
}