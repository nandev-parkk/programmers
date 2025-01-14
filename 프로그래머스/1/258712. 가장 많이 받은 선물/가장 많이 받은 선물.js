function solution(friends, gifts) {
  // 각 사람의 선물 지수 구하기
  const giftIndex = gifts.reduce((acc, cv) => {
    const [giver, receiver] = cv.split(" ");

    const updatedAcc = acc;

    updatedAcc[giver] = (updatedAcc[giver] || 0) + 1;
    updatedAcc[receiver] = (updatedAcc[receiver] || 0) - 1;

    return updatedAcc;
  }, {});

  // 선물을 준 사람의 선물을 전달한 친구별 횟수 구하기
  const giftCounts = {};

  for (const gift of gifts) {
    const [giver, receiver] = gift.split(" ");

    // giver(본인)을 제외한 친구들 객체 생성
    const excludeGiver = friends
      .filter((friend) => friend !== giver)
      .reduce((acc, cv) => ({ ...acc, [cv]: 0 }), {});

    if (!(giver in giftCounts)) {
      giftCounts[giver] = { ...excludeGiver, [receiver]: 1 };
    } else {
      giftCounts[giver] = {
        ...giftCounts[giver],
        [receiver]: giftCounts[giver][receiver]
          ? giftCounts[giver][receiver] + 1
          : 1,
      };
    }
  }

  // 각 사람이 받을 선물 갯수를 구하기 위해 각 사람의 이름을 키로 객체 만들기
  const answer = {};

  for (const friend of friends) {
    answer[friend] = 0;
  }

  // 객체를 만들어서 [a][b] [b][a] 비교
  const giftCountsEntries = Object.entries(giftCounts);

  for (const giftEntry of giftCountsEntries) {
    const [giver, counts] = giftEntry;

    const receivers = Object.keys(counts);

    for (const receiver of receivers) {
      // receiver가 없는 경우(괘씸하게도 선물을 아예 안한 친구들) giver를 + 1하고 continue
      if (!giftCounts[receiver]) {
        answer[giver]++;

        continue;
      }

      if (giftCounts[giver][receiver] > giftCounts[receiver][giver]) {
        answer[giver]++;
      } else if (giftCounts[giver][receiver] === giftCounts[receiver][giver]) {
        giftIndex[giver] > giftIndex[receiver] && answer[giver]++;
      }
    }
  }

  return Math.max(...Object.values(answer));
}