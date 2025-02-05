function solution(s) {
  return convertedString = s
    .split("},{")
    .map((cv) =>
      cv
        .replace(/[\{\}]/g, "")
        .split(",")
        .map((str) => +str),
    )
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cv) => acc.concat(cv.filter((v) => !acc.includes(v))), []);
}