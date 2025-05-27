function solution(picks, minerals) {
  let answer = 0;

  const fatigue = {
    0: { diamond: 1, iron: 1, stone: 1 },
    1: { diamond: 5, iron: 1, stone: 1 },
    2: { diamond: 25, iron: 5, stone: 1 },
  };

  // 1. 광물을 다섯개씩 쪼개서 캘 수 있는 만큼만 넣는다.
  const totalPicks = picks.reduce((acc, cv) => acc + cv, 0) * 5;
  const slicedMinerals = [];

  for (let i = 0; i < minerals.length; i += 5) {
    if (totalPicks <= i) break;

    slicedMinerals.push(minerals.slice(i, i + 5));
  }

  // 2. 다섯개씩 쪼갠 광물들을 각각의 곡괭이로 캤을 때의 피로도를 구해 변환한다.
  // [다이아몬드, 철, 돌]
  const mappedMinerals = slicedMinerals.map((minerals) => {
    const diamondFatigue = minerals.reduce(
      (acc, mineral) => acc + fatigue[0][mineral],
      0,
    );
    const ironFatigue = minerals.reduce(
      (acc, mineral) => acc + fatigue[1][mineral],
      0,
    );
    const stoneFatigue = minerals.reduce(
      (acc, mineral) => acc + fatigue[2][mineral],
      0,
    );

    return [diamondFatigue, ironFatigue, stoneFatigue];
  });

  // 3. 돌로 캤을 때의 피로도가 높다는 것은 다이아몬드의 비율이 많다는 뜻이므로 돌로 캤을 때의 피로도로 내림차순한다.
  mappedMinerals
    .sort((a, b) => b[2] - a[2])
    .forEach((v) => {
      if (picks[0] > 0) {
        picks[0]--;
        answer += v[0];

        return;
      }

      if (picks[1] > 0) {
        picks[1]--;
        answer += v[1];

        return;
      }

      if (picks[2] > 0) {
        picks[2]--;
        answer += v[2];

        return;
      }
    });

  return answer;
}