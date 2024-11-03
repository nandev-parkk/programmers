function solution(cards1, cards2, goal) {
    const goalWithoutCards2 = goal.filter((str) => !cards2.includes(str));

  for (const i in goalWithoutCards2) {
    if (cards1[i] !== goalWithoutCards2[i]) return "No";
  }

  const goalWithoutCards1 = goal.filter((str) => !cards1.includes(str));

  for (const i in goalWithoutCards1) {
    return cards2[i] !== goalWithoutCards1[i] ? "No" : "Yes";
  }
}