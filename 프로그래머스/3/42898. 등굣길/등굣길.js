function solution(m, n, puddles) {
  const dp = Array.from({ length: n }, () => Array(m).fill(0));

  dp[0][0] = 1;

  const puddleMap = Array.from({ length: n }, () => Array(m).fill(false));

  for (const [puddleX, puddleY] of puddles) {
    puddleMap[puddleY - 1][puddleX - 1] = true;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (puddleMap[i][j]) continue;

      if (!i && j) dp[i][j] = dp[i][j] + dp[i][j - 1];

      if (!j && i) dp[i][j] = dp[i - 1][j] + dp[i][j];

      if (i && j) {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
      }
    }
  }

  return dp[n - 1][m - 1];
}