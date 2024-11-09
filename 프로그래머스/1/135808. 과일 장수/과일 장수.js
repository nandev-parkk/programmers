function solution(k, m, score) {
      const answer = [];
  const sortedScore = score.sort((a, b) => b - a);

  for (let i = 0; i < sortedScore.length; i += m) {
    const slicedScore = sortedScore.slice(i, i + m);

    answer.push(slicedScore);
  }

  return answer
    .filter((arr) => arr.length === m)
    .map((arr) => {
      const min = Math.min(...arr);
      return min * m;
    })
    .reduce((acc, cv) => acc + cv, 0);
}