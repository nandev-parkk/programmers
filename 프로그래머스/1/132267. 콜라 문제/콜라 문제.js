function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    // 주는 갯수
    const sentCoke = n - (n % a);
    console.log(sentCoke, "sentCoke");

    // 받는 갯수
    const receivedCoke = (sentCoke / a) * b;
    console.log(receivedCoke, "receivedCoke");

    answer += receivedCoke;

    // 남은 갯수
    n = n - sentCoke + receivedCoke;
  }

  console.log(answer, "answer");
  return answer;
}