function getDivisor(number) {
  let count = 0;

  const sqrt = Math.floor(Math.sqrt(number));

  for (let i = 1; i <= sqrt; i++) {
    if (i * i === number) {
      count++;
    } else if (number % i === 0) {
      count += 2;
    }
  }

  return count;
}

function solution(number, limit, power) {
  const answer = Array.from({ length: number })
    .map((_, i) => i + 1)
    .map((num) => getDivisor(num))
    .map((num) => (num > limit ? power : num))
    .reduce((acc, cv) => acc + cv, 0);

  return answer;
}