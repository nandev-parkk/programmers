function solution(n) {
  const dp = [0, 3, 11];

  // 홀수인 경우 바로 0 리턴
  if (n % 2) return 0;

  // shift 연산
  const idx = n >> 1;

  // 3보다 작은 경우 dp의 해당 index 경우의 수 리턴
  if (idx < 3) return dp[idx];

  for (let i = 3; i <= idx; i++) {
    dp[i] = dp[i - 1] * 3 + 2;

    for (let j = 1; j < i - 1; j++) {
      dp[i] += dp[j] * 2;
    }
      
    dp[i] %= 1000000007;
  }

  return dp[idx];
}