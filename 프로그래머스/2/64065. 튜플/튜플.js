function solution(s) {
  const answer = [];

  // {{123}}의 경우도 제대로 동작
  const cs = s
    .split("},{")
    .map((cv) =>
      cv
        .replace(/[\{\}]/g, "")
        .split(",")
        .map((str) => +str),
    )
    .sort((a, b) => a.length - b.length);

  for (const nums of cs) {
    for (const num of nums) {
      !answer.includes(num) && answer.push(num);
    }
  }

  return answer;
}