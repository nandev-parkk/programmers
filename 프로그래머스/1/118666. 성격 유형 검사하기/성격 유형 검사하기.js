function solution(survey, choices) {
    const score = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  // const personalityType2 = new Map([
  //   ["indicator1", { R: 0, T: 0 }],
  //   ["indicator2", { C: 0, F: 0 }],
  //   ["indicator3", { J: 0, M: 0 }],
  //   ["indicator4", { A: 0, N: 0 }],
  // ]);
  //
  // const personalityType = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  const personalityType = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  survey.forEach((indicator, idx) => {
    const [a, b] = indicator;
    const currentScore = choices[idx];

    personalityType.forEach((type, i) => {
      if (currentScore < 4 && type.hasOwnProperty(a)) {
        personalityType[i][a] += score[currentScore];
      } else if (currentScore > 4 && type.hasOwnProperty(b)) {
        personalityType[i][b] += score[currentScore];
      }
    });
  });

  const answer = personalityType
    .map((indicator) => {
      const [[aType, aScore], [bType, bScore]] = Object.entries(indicator);

      if (aScore === bScore) {
        return [aType, bType].sort()[0];
      }

      return aScore > bScore ? aType : bType;
    })
    .join("");

  return answer;
}