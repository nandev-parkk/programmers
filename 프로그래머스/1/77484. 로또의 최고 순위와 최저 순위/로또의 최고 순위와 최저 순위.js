function solution(lottos, win_nums) {
  const ranking = [6, 5, 4, 3, 2, 1];

  const a = lottos
    .map((lotto) => (lotto !== 0 && !win_nums.includes(lotto) ? NaN : lotto))
    .filter((lotto) => lotto === 0 || lotto);

  const high = ranking[a.length - 1] || ranking[0];

  const low = ranking[a.filter((lotto) => lotto).length - 1] || ranking[0];

  return [high, low];
}