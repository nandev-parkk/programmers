function solution(n, k) {
  const answer = n
    .toString(k)
    .split("0")
    .filter((v) => +v > 1 && checkIsPrime(+v));

  return answer.length;
}

function checkIsPrime(num) {
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (!(num % i)) return false;
  }

  return true;
}