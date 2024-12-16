function solution(dartResult) {
    const bonus = {
    S: 1,
    D: 2,
    T: 3,
  };

  const option = {
    "*": " * 2",
    "#": " * (-1)",
  };

  const splitDartResult = dartResult.match(/\d+|[^\d]/g);

  const numIndex = splitDartResult
    .map((cv, i) => (isNaN(cv) ? cv : i))
    .filter((num) => !isNaN(num));

  for (let i = 0; i < splitDartResult.length; i++) {
    const currentValue = splitDartResult[i];

    if (!isNaN(currentValue)) continue;

    if (currentValue === "S" || currentValue === "D" || currentValue === "T") {
      splitDartResult[i - 1] =
        `${splitDartResult[i - 1]} ** ${bonus[currentValue]}`;
    }

    if (currentValue === "*") {
      const sliceNumIndex = numIndex.filter((num) => i > num).slice(-2);

      sliceNumIndex.forEach((index) => {
        splitDartResult[index] += option[currentValue];
      });
    }

    if (currentValue === "#") {
      splitDartResult[i - 2] += option[currentValue];
    }
  }

  const answer = splitDartResult
    .filter((cv) => /\d/.test(cv))
    .map((cv) => new Function(`return ${cv}`)())
    .reduce((acc, cv) => acc + cv, 0);

  return answer;
}