function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];

  // babbling 배열을 순회하면서 각 아이템 안의 words의 아이템 부분을 ' '로 치환
  const answer = babbling
    .map((bab) => {
      for (const word of words) {
        bab = bab.replace(word, " ");
      }

      // bab의 공백 제거
      return bab.trim();
    })
    .filter((bab) => bab === "").length;

  return answer;
}