function solution(s) {
  const answer = [];

  const convertedString = s
    .split("},{")
    .map((cv) =>
      cv
        .replace(/[\{\}]/g, "")
        .split(",")
        .map((str) => +str),
    )
    .sort((a, b) => a.length - b.length);

  for (const nums of convertedString) {
    for (const num of nums) {
      !answer.includes(num) && answer.push(num);
    }
  }

  return answer;
}