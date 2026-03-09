function solution(scores) {
  const [wanhoScore1, wanhoScore2] = scores[0];
  const wanhoTotalScore = wanhoScore1 + wanhoScore2;

  // 첫번째 점수로 내림 차순 정렬하고 첫번째 점수가 같은 경우 두번째 점수로 오름 차순 정렬
  scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  // 가장 높은 두번째 점수
  let maxSecondScore = 0;
  let wanhoRank = 1;

  console.log(scores, "scores");

  for (const [a, b] of scores) {
    if (b < maxSecondScore) {
      if (a === wanhoScore1 && b === wanhoScore2) return -1;
      continue;
    }

    maxSecondScore = Math.max(maxSecondScore, b);

    if (a + b > wanhoTotalScore) wanhoRank++;
  }

  console.log(wanhoRank);

  return wanhoRank;
}