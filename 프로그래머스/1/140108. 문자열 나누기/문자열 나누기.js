function solution(s) {
      const splitStr = s.split("");
  const charCount = new Map();
  const answer = [];

  for (let i = 0; i < splitStr.length; i++) {
    const currentChar = splitStr[i];
    const x = splitStr[0];

    charCount.set(
      currentChar,
      charCount.has(currentChar) ? charCount.get(currentChar) + 1 : 1,
    );

    const xCount = charCount.get(x);
    const anotherCount = [...charCount.entries()]
      .filter((item) => !item.includes(x))
      .map((num) => num[1])
      .reduce((acc, cv) => acc + cv, 0);

    if (xCount === anotherCount) {
      const spliceStr = splitStr.splice(0, i + 1);

      answer.push(spliceStr);
      charCount.clear();
      i = -1;
    }
  }

  if (splitStr.length) {
    answer.push(splitStr);
  }

  return answer.length;
}