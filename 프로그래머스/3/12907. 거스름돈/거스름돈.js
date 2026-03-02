function solution(n, money) {
  let answer = 0;

  const dp = Array.from({ length: n + 1 }, () => 0);

  dp[0] = 1;

  money.forEach((el) => {
    for (let i = el; i < n + 1; i++) dp[i] += dp[i - el];
  });

  answer = dp[n] % 1000000007;

  return answer;
}