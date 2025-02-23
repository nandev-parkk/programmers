function checkIsPrime(num) {
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (!(num % i)) return false;
  }

  return true;
}

function solution(n, k) {
  const answer = n
    .toString(k)
    .split("0")
    .filter((v) => +v > 1 && checkIsPrime(+v)); // 빈 문자열은 +를 붙여 숫자 타입으로 변환시 0으로 치환됌

  return answer.length;
}