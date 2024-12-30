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

  const indicators = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  survey.forEach((types, idx) => {
    const [disagree, agree] = types;
    const currentScore = choices[idx];

    indicators.forEach((indicator, i) => {
      if (currentScore < 4 && indicator.hasOwnProperty(disagree)) {
        indicators[i][disagree] += score[currentScore];
      } else if (currentScore > 4 && indicator.hasOwnProperty(agree)) {
        indicators[i][agree] += score[currentScore];
      }
    });
  });

  const answer = indicators
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