function solution(n) {
  const dp = [1, 2];

  for (let i = 2; i < n; i++) {
    const sum = dp[i - 1] + dp[i - 2];

    dp[i] = sum > 1000000007 ? sum % 1000000007 : sum;
  }

  return dp.at(-1);
}