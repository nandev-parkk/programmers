function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    // 주는 갯수
    const sentCoke = n - (n % a);

    // 받는 갯수
    const receivedCoke = (sentCoke / a) * b;

    answer += receivedCoke;

    // 남은 갯수
    n = n - sentCoke + receivedCoke;
  }

  return answer;
}