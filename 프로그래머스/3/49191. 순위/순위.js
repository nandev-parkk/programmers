function solution(n, results) {
  // 각 선수에 대해 자신을 제외한 모든 선수들과의 승부를 기록
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false),
  );

  // true면 이긴거
  // A -> B의 승패 여부를 구함
  for (const [a, b] of results) {
    dp[a - 1][b - 1] = true;
  }

  // A -> C의 승패 여부를 구해아함
  // 둘 다 true면 A -> C이므로 true
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dp[i][k] && dp[k][j]) dp[i][j] = true;
      }
    }
  }

  let answer = 0;

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (dp[i][j] || dp[j][i]) count++;
    }

    if (count === n - 1) answer++;
  }

  return answer;
}