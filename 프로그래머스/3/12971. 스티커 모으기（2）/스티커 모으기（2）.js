function solution(sticker) {
  // [i - 1]: 이전 스티커까지 뜯었을 때의 최댓값
  // [i - 2]: 전전 스티커까지 뜯었을 때의 최댓값
  // [i - 2] + sticker[i]: 인접한 스티커가 아니므로 현재 스티커를 뜯을 수 있다.

  if (sticker.length === 1) return sticker[0];
    
  // i가 음수가 되므로 + 2
  const length = sticker.length + 2;

  // 처음부터 떼기
  const dp1 = Array.from({ length }, () => 0);

  // 두번째부터 떼기
  const dp2 = Array.from({ length }, () => 0);

  for (let i = 2; i < length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i - 2]);
  }

  for (let i = 3; i < length; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i - 2]);
  }

  return Math.max(dp1[length - 2], dp2[length - 1]);
}