function solution(n) {
  const numArr = Array.from({ length: n }, (_, i) => i + 1);

  const answer = numArr.filter((num) => {
    const divisor = [];

    for (let i = 1; i <= num; i++) {
      num % i === 0 && divisor.push(i);
    }

    return divisor.length >= 3 && num;
  });

  return answer.length;
}