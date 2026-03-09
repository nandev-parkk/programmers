function solution(scores) {
  const [wanhoScore1, wanhoScore2] = scores[0];
  const wanhoTotalScore = wanhoScore1 + wanhoScore2;

  // 첫번째 점수로 내림차순 정렬하고 첫번째 점수가 같은 경우 두번째 점수로 오름차순 정렬
  scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  // 가장 높은 두번째 점수
  let maxSecondScore = 0;
  let wanhoRank = 1;

  for (const [a, b] of scores) {
    // 첫번째 점수가 같으면 두번째 점수를 오름차순 했기 때문에 이전 사원들 중 더 큰 두번째 값을 가지고 있으면 무조건 둘 다 작은 경우이기 때문에 continue
    if (b < maxSecondScore) {
      if (a === wanhoScore1 && b === wanhoScore2) return -1; // 그게 완호인 경우 -1 바로 리턴
      continue;
    }

    maxSecondScore = Math.max(maxSecondScore, b);

    if (a + b > wanhoTotalScore) wanhoRank++;
  }

  return wanhoRank;
}