function solution(my_string, m, c) {
  const convertedString = [...my_string];
  const slicedString = [];

  for (let i = 0; i < convertedString.length; i += m) {
    const slice = convertedString.slice(i, i + m);
    slicedString.push(slice);
  }

  const answer = [];

  for (const strArr of slicedString) {
    answer.push(strArr[c - 1]);
  }

  return answer.join("");
}