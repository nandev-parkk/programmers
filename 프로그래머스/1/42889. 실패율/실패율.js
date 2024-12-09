function solution(N, stages) {
      const allStages = Array.from({ length: N }, (_, i) => i + 1);

  const a = allStages
    .map((stage, i) => {
      const arr = [];

      for (let i = 0; i < stages.length; i++) {
        if (stage <= stages[i]) arr.push(stages[i]);
      }

      const notClearMan = arr.filter((num) => stage === num);

      return { index: i + 1, failureRate: notClearMan.length / arr.length };
    })
    .sort((a, b) => b.failureRate - a.failureRate)
    .map((d) => d.index);

  return a;
}