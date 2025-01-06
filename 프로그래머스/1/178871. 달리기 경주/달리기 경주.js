function solution(players, callings) {
  /** 등수 계산 */
  // 등수별 플레이어
  const rankByPlayerIndex = {};

  // 플레이어별 등수
  const rankByPlayerName = {};

  players.forEach((player, i) => {
    rankByPlayerIndex[i + 1] = player;
    rankByPlayerName[player] = i + 1;
  });

  /** 추월 레쓰고 */
  callings.forEach((calling) => {
    // 현재 플레이어(calling)의 등수
    const currentPlayerRank = rankByPlayerName[calling];

    // 현재 플에이어가 추월해서 얻게되는 등수
    const targetRank = currentPlayerRank - 1;

    // 현재 플레이어의 이름
    const currentPlayer = calling;

    // 추월 당하는 이전 플레이어의 이름
    const prePlayer = rankByPlayerIndex[targetRank];

    rankByPlayerName[currentPlayer] = targetRank;
    rankByPlayerName[prePlayer] = currentPlayerRank;

    rankByPlayerIndex[currentPlayerRank] = prePlayer;
    rankByPlayerIndex[targetRank] = currentPlayer;
  });

  const answer = Object.entries(rankByPlayerName)
    .sort(([, a], [, b]) => a - b)
    .map(([player]) => player);

  return answer;
}