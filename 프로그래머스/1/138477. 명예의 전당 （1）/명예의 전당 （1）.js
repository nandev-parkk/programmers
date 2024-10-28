function solution(k, score) {
  const copiedScore = [];

  const answer = score.map((num, i) => {
    if (copiedScore.length < k) {
      copiedScore.push(num);
    } else if (copiedScore.length >= k && copiedScore[0] < num) {
      copiedScore.shift();
      copiedScore.push(num);
    }

    copiedScore.sort((a, b) => a - b);

    return copiedScore[0];
  });

  return answer;
}